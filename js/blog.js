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
        
        // Si no quieres usar manifest, alternativa:
        // const response = await fetch('posts/');
        // return parsePostsFromResponse(await response.text());
    } catch (error) {
        console.error("Error cargando posts:", error);
        return [];
    }
}

function renderIndex(posts) {
    const indexContainer = document.querySelector('.side-index');
    if(!indexContainer) return;

    // Agrupar por categorías
    const categories = {};
    posts.forEach(post => {
        if(!categories[post.category]) {
            categories[post.category] = [];
        }
        categories[post.category].push(post);
    });

    // Renderizar índice
    let html = `
        <div class="index-category">
            <button class="random-post-trigger">
                🎲 Texto Aleatorio
            </button>
        </div>
    `;

    Object.entries(categories).forEach(([category, posts]) => {
        html += `
        <div class="index-category collapsed">
            <button class="category-toggle">${category} ▼</button>
            <div class="index-items">
                ${posts.map(post => `
                    <a href="#${post.id}" class="index-item" data-post="${post.id}">
                        ${post.title}
                    </a>
                `).join('')}
            </div>
        </div>`;
    });

    indexContainer.innerHTML = html;

    // Añadir eventos
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
