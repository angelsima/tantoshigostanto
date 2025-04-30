document.addEventListener('DOMContentLoaded', async () => {
    // Cargar lista de posts
    const posts = await loadPosts();
    renderIndex(posts);
    
    // Cargar contenido inicial
    const hash = window.location.hash.replace('#', '');
    if(hash && posts.find(p => p.id === hash)) {
        loadPostContent(hash);
    } else if(posts.length > 0) {
        loadRandomPost(posts);
    }

    // Evento para botón aleatorio
    document.querySelector('.random-post-trigger')?.addEventListener('click', () => {
        loadRandomPost(posts);
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
    if(!indexContainer) return;

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

    // Renderizar índice
    let html = `
        <div class="index-category">
            <button class="random-post-trigger">
                🎲 Texto Aleatorio
            </button>
        </div>
    `;

    for (const [cat, group] of Object.entries(categories)) {
        html += `<div class="index-category collapsed">
                    <button class="category-toggle">${cat} ▼</button>
                    <div class="index-items">`;

        // Primero, los posts sin sub-categoría
        group.withoutSub.forEach(p => {
            html += `<a href="#${p.id}" class="index-item" data-post="${p.id}">${p.title}</a>`;
        });

        // Luego, solo si existen, los grupos de sub-categoría
        for (const [sub, arr] of Object.entries(group.withSub)) {
            html += `<div class="sub-category">
                        <strong>${sub}</strong>
                        ${arr.map(p => `<a href="#${p.id}" class="index-item" data-post="${p.id}">${p.title}</a>`).join('')}
                     </div>`;
        }

        html += `   </div>
                  </div>`;
    }

    indexContainer.innerHTML = html;

    // Añadir eventos de colapso
    document.querySelectorAll('.category-toggle').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            const category = e.target.closest('.index-category');
            const items = category.querySelector('.index-items');
            const isCollapsed = items.style.display === 'none';
            items.style.display = isCollapsed ? 'block' : 'none';
            e.target.innerHTML = isCollapsed ?
                e.target.textContent.replace('▲', '▼') :
                e.target.textContent.replace('▼', '▲');
        });
    });

    // Añadir eventos de carga de post
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
    if(posts.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * posts.length);
    const randomPost = posts[randomIndex];
    
    loadPostContent(randomPost.id);
    window.location.hash = randomPost.id;
}
