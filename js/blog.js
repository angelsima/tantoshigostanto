// js/blog.js

// Carga y renderiza todo cuando el DOM está listo
document.addEventListener('DOMContentLoaded', async () => {
    // 1) Cargar y ordenar posts
    const posts = await loadPosts();
    const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // 2) Renderizar índice (escritorio y móvil)
    renderIndex(sortedPosts);

    // 3) Cargar contenido inicial según hash o último post
    const hash = window.location.hash.replace('#', '');
    if (hash && sortedPosts.find(p => p.id === hash)) {
        loadPostContent(hash);
    } else {
        loadLatestPost(sortedPosts);
    }

    // 4) Botones de escritorio
    document.querySelector('.random-post-trigger')?.addEventListener('click', () => {
        loadRandomPost(sortedPosts);
    });
    document.querySelector('.latest-posts-trigger')?.addEventListener('click', () => {
        showLatestPosts(sortedPosts);
    });

    // 5) Controles móviles
    document.querySelector('.mobile-categories-toggle')?.addEventListener('click', () => {
        document.querySelector('.mobile-categories-menu').style.display = 'block';
    });
    document.querySelector('.mobile-categories-menu')?.addEventListener('click', e => {
        if (e.target === e.currentTarget) {
            e.currentTarget.style.display = 'none';
        }
    });
    document.querySelector('.mobile-latest')?.addEventListener('click', () => {
        showLatestPosts(sortedPosts);
    });
    document.querySelector('.mobile-random')?.addEventListener('click', () => {
        loadRandomPost(sortedPosts);
    });

    // 6) Destacar enlace activo del nav
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href').split('/').pop() === currentPage) {
            link.classList.add('activo');
        }
    });
});

// FETCH manifest JSON
async function loadPosts() {
    try {
        const response = await fetch('posts/posts-manifest.json');
        return await response.json();
    } catch (error) {
        console.error("Error cargando posts:", error);
        return [];
    }
}

// Renderiza el índice en .side-index y clona en .mobile-side-index
function renderIndex(posts) {
    const indexContainer = document.querySelector('.side-index');
    if (!indexContainer) return;

    // — construir la estructura igual que antes —
    const categories = {};
    posts.forEach(post => {
        const cat = post.category;
        categories[cat] ??= { withoutSub: [], withSub: {} };
        if (post['subcategory']) {
            categories[cat].withSub[post['subcategory']] ??= [];
            categories[cat].withSub[post['subcategory']].push(post);
        } else {
            categories[cat].withoutSub.push(post);
        }
    });
    const sortedCategories = Object.entries(categories)
        .sort(([a], [b]) => a.localeCompare(b));

    let html = `
      <div class="index-controls">
        <button class="latest-posts-trigger">📅 Últimos textos</button>
        <button class="random-post-trigger">🎲 Texto aleatorio</button>
      </div>
      <h3 class="categories-title">Categorías</h3>
    `;
    for (const [cat, group] of sortedCategories) {
      html += `<div class="index-category collapsed">
                 <button class="category-toggle">${cat} ▼</button>
                 <div class="index-items">`;
      group.withoutSub
           .sort((a,b)=>a.title.localeCompare(b.title))
           .forEach(p => {
             html += `<a href="#${p.id}" class="index-item" data-post="${p.id}">${p.title}</a>`;
           });
      Object.entries(group.withSub)
            .sort(([a],[b])=>a.localeCompare(b))
            .forEach(([sub, arr]) => {
              html += `<div class="subcategory collapsed">
                         <button class="subcategory-toggle">${sub} ▼</button>
                         <div class="index-items">`;
              arr.sort((a,b)=>a.title.localeCompare(b.title))
                 .forEach(p => {
                   html += `<a href="#${p.id}" class="index-item" data-post="${p.id}">${p.title}</a>`;
                 });
              html += `</div></div>`;
            });
      html += `</div></div>`;
    }

    // vuelca en el sidebar de escritorio
    indexContainer.innerHTML = html;

    // colapsables escritorio
    indexContainer.querySelectorAll('.category-content, .index-items').forEach(el => el.style.display = 'none');
    indexContainer.querySelectorAll('.category-toggle').forEach(btn => {
      btn.addEventListener('click', e => {
        const items = btn.nextElementSibling;
        const open = items.style.display === 'block';
        items.style.display = open ? 'none' : 'block';
        btn.textContent = btn.textContent.replace(open ? '▲' : '▼', open ? '▼' : '▲');
      });
    });
    indexContainer.querySelectorAll('.subcategory-toggle').forEach(btn => {
      btn.addEventListener('click', e => {
        const items = btn.nextElementSibling;
        const open = items.style.display === 'block';
        items.style.display = open ? 'none' : 'block';
        btn.textContent = btn.textContent.replace(open ? '▲' : '▼', open ? '▼' : '▲');
      });
    });

    // clic en escritorio
    indexContainer.querySelectorAll('.index-item').forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault();
        loadPostContent(item.dataset.post, sortedPosts);
        window.location.hash = item.dataset.post;
      });
    });

    // — clonar para móvil —
    const mobileSideIndex = document.querySelector('.mobile-side-index');
    if (mobileSideIndex) {
      mobileSideIndex.innerHTML = html;

      // ocultar controles que no queremos en el overlay
      mobileSideIndex.querySelector('.index-controls')?.remove();

      // re‑bind colapsables en móvil
      mobileSideIndex.querySelectorAll('.category-content, .index-items')
                     .forEach(el => el.style.display = 'none');
      mobileSideIndex.querySelectorAll('.category-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
          const items = btn.nextElementSibling;
          const open = items.style.display === 'block';
          items.style.display = open ? 'none' : 'block';
          btn.textContent = btn.textContent.replace(open ? '▲' : '▼', open ? '▼' : '▲');
        });
      });
      mobileSideIndex.querySelectorAll('.subcategory-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
          const items = btn.nextElementSibling;
          const open = items.style.display === 'block';
          items.style.display = open ? 'none' : 'block';
          btn.textContent = btn.textContent.replace(open ? '▲' : '▼', open ? '▼' : '▲');
        });
      });

      // clic en móvil: carga y cierra menú
      mobileSideIndex.querySelectorAll('.index-item').forEach(item => {
        item.addEventListener('click', e => {
          e.preventDefault();
          loadPostContent(item.dataset.post, sortedPosts);
          window.location.hash = item.dataset.post;
          document.querySelector('.mobile-categories-menu').style.display = 'none';
        });
      });
    }
}


// Carga un post dentro de .post-content
async function loadPostContent(postId, sortedPosts) {
    try {
        const resp = await fetch(`posts/${postId}.html`);
        const html  = await resp.text();
        // Calcular posición y total
        const postIndex = sortedPosts.findIndex(p => p.id === postId);
        const totalPosts = sortedPosts.length;
        const position = postIndex !== -1 ? (totalPosts - postIndex) : '?'; // 
        
        document.querySelector('.post-content').innerHTML = `
            <article class="blog-post" id="${postId}">
            <div class="post-number">${position}/${totalPosts}</div>
                ${html}
            </article>
        `;
    } catch (err) {
        console.error("Error cargando post:", err);
        document.querySelector('.post-content').innerHTML = `
            <div class="error-message">
                No se pudo cargar el post solicitado.
            </div>
        `;
    }
}

// Texto aleatorio
function loadRandomPost(posts) {
    if (!posts.length) return;
    const rnd = posts[Math.floor(Math.random() * posts.length)];
    loadPostContent(rnd.id, posts);
    window.location.hash = rnd.id;
}

// Mostrar últimos textos
function showLatestPosts(posts) {
    const latest = posts.slice(0, 100);
    document.querySelector('.post-content').innerHTML = `
        <div class="latest-posts">
            <h4>Últimos textos</h4>
            <ul>
               ${latest.map((p, i) => `
                    <li>
                      <a href="#${p.id}" class="latest-post-item" data-post="${p.id}">
                        ${latest.length - i}. ${p.title} 
                        <span class="post-date">(${new Date(p.date).toLocaleDateString()})</span>
                      </a>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
    document.querySelectorAll('.latest-post-item').forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            loadPostContent(item.dataset.post, posts);
            window.location.hash = item.dataset.post;
        });
    });
}

// Cargar el último post al inicio
async function loadLatestPost(posts) {
    if (!posts.length) return;
    const first = posts[0];
    await loadPostContent(first.id, posts);
    document.querySelector('.post-content').innerHTML = `
        <div class="latest-post-header">
            <h4>Último texto publicado:</h4>
        </div>
        ${document.querySelector('.post-content').innerHTML}
    `;
}
