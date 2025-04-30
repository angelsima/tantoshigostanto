// indice.js - carga dinámicamente posts desde posts.json y genera índice lateral y contenido

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const res = await fetch('posts.json');
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const posts = await res.json();

    const sideIndex = document.querySelector('.side-index');
    const contentArea = document.getElementById('posts-container');

    // Limpiamos contenedores
    sideIndex.innerHTML = '';
    contentArea.innerHTML = '';

    // Generar índice y contenido
    posts.forEach((post, i) => {
      // Crear enlace en side-index
      const link = document.createElement('a');
      link.href = `#${post.id}`;
      link.className = 'index-item';
      link.textContent = post.title;
      link.addEventListener('click', e => {
        e.preventDefault();
        // activar tarjeta correspondiente
        document.querySelectorAll('.content-card').forEach(card => card.classList.remove('active'));
        document.getElementById(post.id).classList.add('active');
        // marcar link activo
        document.querySelectorAll('.index-item').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      });

      sideIndex.appendChild(link);

      // Crear tarjeta de contenido
      const card = document.createElement('div');
      card.id = post.id;
      card.className = 'content-card';
      if (i === 0) card.classList.add('active'); // mostrar la primera por defecto

      // Añadir título y HTML interno
      const h2 = document.createElement('h2');
      h2.textContent = post.title;
      const wrapper = document.createElement('div');
      wrapper.className = 'card-content';
      wrapper.innerHTML = post.html;

      card.appendChild(h2);
      card.appendChild(wrapper);
      contentArea.appendChild(card);
    });

    // Opcional: hacer scroll suave al cambiar de sección
    document.documentElement.style.scrollBehavior = 'smooth';

  } catch (err) {
    console.error('Error cargando posts:', err);
  }
});
