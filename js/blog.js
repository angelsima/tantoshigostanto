
document.addEventListener('DOMContentLoaded', async () => {
    // Cargar y ordenar posts
    const posts = await loadPosts();
 const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    // Renderizar índice
    renderIndex(sortedPosts);
    // Cargar contenido inicial
    const hash = window.location.hash.replace('#', '');
    if (hash && sortedPosts.find(p => p.id === hash)) {
        loadPostContent(hash);
    } else {
        loadLatestPost(sortedPosts);
    }
    // Event listeners
    document.querySelector('.random-post-trigger')?.addEventListener('click', () => {
        loadRandomPost(sortedPosts);
    });
    
    document.querySelector('.latest-posts-trigger')?.addEventListener('click', () => {
        showLatestPosts(sortedPosts);
    });
});
async function loadPosts() {
    try {
        const response = await fetch('posts/posts-manifest.json');
        return await response.json();
    } catch (error) {
        console.error("Error cargando posts:", error);
        return [];
    }
}

function renderIndex(posts) {
    const indexContainer = document.querySelector('.side-index');
    if (!indexContainer) return;

    // Agrupar por categorías, distinguiendo posts con y sin sub-categoría
    const categories = {};
    posts.forEach(post => {
        const cat = post.category;
        if (!categories[cat]) {
            categories[cat] = { withoutSub: [], withSub: {} };
        }
        if (post['sub-category']) {
            const sub = post['sub-category'];
            if (!categories[cat].withSub[sub]) {
                categories[cat].withSub[sub] = [];
            }
            categories[cat].withSub[sub].push(post);
        } else {
            categories[cat].withoutSub.push(post);
        }
    });
 // Ordenar categorías alfabéticamente
    const sortedCategories = Object.entries(categories).sort(([a], [b]) => a.localeCompare(b));
    // Renderizar índice
     let html = `
        <div class="index-controls">
            <button class="latest-posts-trigger">📅 Últimos textos</button>
            <button class="random-post-trigger">🎲 Texto aleatorio</button>
        </div>
        <h3 class="categories-title">Categorías</h3>
    `;
 sortedCategories.forEach(([cat, group]) => {
        html += `<div class="index-category collapsed">
                    <button class="category-toggle">${cat} ▼</button>
                    <div class="index-items">`;
// Ordenar posts sin subcategoría
        const sortedWithoutSub = group.withoutSub.sort((a, b) => a.title.localeCompare(b.title));
        sortedWithoutSub.forEach(p => {
            html += `<a href="#${p.id}" class="index-item" data-post="${p.id}">${p.title}</a>`;
        });

        // Ordenar y mostrar subcategorías
        const sortedSubCategories = Object.entries(group.withSub).sort(([a], [b]) => a.localeCompare(b));
        sortedSubCategories.forEach(([sub, arr]) => {
            const sortedSubPosts = arr.sort((a, b) => a.title.localeCompare(b.title));
            html += `<div class="sub-category collapsed">
                        <button class="sub-toggle">${sub} ▼</button>
                        <div class="sub-items">`;
            html += sortedSubPosts.map(p => `<a href="#${p.id}" class="index-item" data-post="${p.id}">${p.title}</a>`).join('');
            html += `</div></div>`;
        });

        html += `</div></div>`;
    });
     
      indexContainer.innerHTML = html;
// Inicializar categorías y subcategorías como colapsadas
document.querySelectorAll('.index-items, .sub-items').forEach(items => {
    items.style.display = 'none';
});
    // Eventos de colapso categoría
    document.querySelectorAll('.category-toggle').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            const category = e.target.closest('.index-category');
            const items = category.querySelector('.index-items');
            const isCollapsed = items.style.display === 'none';
            items.style.display = isCollapsed ? 'block' : 'none';
            e.target.textContent = isCollapsed ? e.target.textContent.replace('▼', '▲') : e.target.textContent.replace('▲', '▼');
        });
    });

    // Eventos de colapso sub-categoría
    document.querySelectorAll('.sub-toggle').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            const subCat = e.target.closest('.sub-category');
            const items = subCat.querySelector('.sub-items');
            const isCollapsed = items.style.display === 'none';
            items.style.display = isCollapsed ? 'block' : 'none';
            e.target.textContent = isCollapsed ? e.target.textContent.replace('▼', '▲') : e.target.textContent.replace('▲', '▼');
        });
    });

    // Eventos de carga de post
    document.querySelectorAll('.index-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const postId = item.dataset.post;
            loadPostContent(postId);
            window.location.hash = postId;
        });
    });
}


async function loadPostContent(postId) {
    try {
        const response = await fetch(`posts/${postId}.html`);
        const content = await response.text();
        
        document.querySelector('.content-area').innerHTML = `
            <article class="blog-post" id="${postId}">
                ${content}
            </article>
        `;
    } catch (error) {
        console.error("Error cargando post:", error);
        document.querySelector('.content-area').innerHTML = `
            <div class="error-message">
                No se pudo cargar el post solicitado
            </div>
        `;
    }
}

function loadRandomPost(posts) {
    if (posts.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * posts.length);
    const randomPost = posts[randomIndex];
    
    loadPostContent(randomPost.id);
    window.location.hash = randomPost.id;
}

// Nueva función para mostrar últimos textos
function showLatestPosts(posts) {
    const latest = posts.slice(0, 10);
    const html = `
        <div class="latest-posts">
            <h4>Últimos 10 textos</h4>
            <ul>
                ${latest.map(post => `
                    <li>
                        <a href="#${post.id}" class="latest-post-item" data-post="${post.id}">
                            ${post.title} <span class="post-date">(${new Date(post.date).toLocaleDateString()})</span>
                        </a>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
    
    document.querySelector('.content-area').innerHTML = html;
    
    // Añadir eventos a los enlaces
    document.querySelectorAll('.latest-post-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            loadPostContent(item.dataset.post);
            window.location.hash = item.dataset.post;
        });
    });
}

// Modificar loadLatestPost
async function loadLatestPost(posts) {
    if(posts.length > 0) {
        const latestPost = posts[0];
        await loadPostContent(latestPost.id);
        
        // Añadir título especial
        document.querySelector('.content-area').innerHTML = `
            <div class="latest-post-header">
                <h2>Último texto publicado</h2>
                <div class="post-meta">
                    <time datetime="${latestPost.date}">${new Date(latestPost.date).toLocaleDateString()}</time>
                </div>
            </div>
            ${document.querySelector('.content-area').innerHTML}
        `;
      
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (currentPage === linkPage) {
            link.classList.add('activo');
        }
    });
});
