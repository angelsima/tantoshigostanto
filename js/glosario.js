
// js/glosario.js

// Cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', async () => {
  const terms = await loadTerms();
  renderIndex(terms);

  // Mensaje inicial
  const main = document.querySelector('.glossary-content');
  main.innerHTML = '<article><p>Selecciona un término del índice para ver su contenido.</p></article>';

  // Si hay hash, carga ese término
  const hash = window.location.hash.replace('#','');
  if (hash && terms.find(t => t.id === hash)) {
    loadTerm(hash);
  }

  // Botón móvil para abrir el overlay
  document.querySelector('.mobile-index-header')
    ?.addEventListener('click', () => {
      document.querySelector('.mobile-categories-menu').style.display = 'block';
    });
});

// Carga el manifest del glosario
async function loadTerms() {
  try {
    const resp = await fetch('glosario/glosario-manifest.json');
    return await resp.json();
  } catch (e) {
    console.error('Error cargando términos:', e);
    return [];
  }
}

// Renderiza el índice de términos (sin controles de latest/random)
function renderIndex(terms) {
  const idx = document.querySelector('.side-index');
  if (!idx) return;

  // Agrupar por categoría
  const byCat = {};
  terms.forEach(t => (byCat[t.category] ||= []).push(t));

  // Construir HTML de categorías y términos
  let html = '';
  Object.keys(byCat).sort((a, b) => a.localeCompare(b)).forEach(cat => {
    const arr = byCat[cat].sort((a, b) => a.term.localeCompare(b.term));
    html += `<div class="index-category">
               <button type="button" class="category-toggle">${cat} ▼</button>
               <div class="index-items">
                 ${arr.map(t =>
                   `<a href="#${t.id}" class="index-item" data-id="${t.id}">${t.term}</a>`
                 ).join('')}
               </div>
             </div>`;
  });
  idx.innerHTML = html;

  // Plegar todo inicialmente
  idx.querySelectorAll('.index-items').forEach(el => el.style.display = 'none');

  // Attach toggles de categoría
  idx.querySelectorAll('.category-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const items = btn.nextElementSibling;
      const open = items.style.display === 'block';
      items.style.display = open ? 'none' : 'block';
      btn.textContent = btn.textContent.replace(open ? '▲' : '▼', open ? '▼' : '▲');
    });
  });

  // Clic en escritorio: cargar término
  idx.querySelectorAll('.index-item').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      loadTerm(a.dataset.id);
      window.location.hash = a.dataset.id;
    });
  });

  // Clonar al overlay móvil
  const mobIdx = document.querySelector('.mobile-side-index');
  if (mobIdx) {
    mobIdx.innerHTML = html;

    // Plegar en móvil
    mobIdx.querySelectorAll('.index-items').forEach(el => el.style.display = 'none');

    // Attach toggles en móvil
    mobIdx.querySelectorAll('.category-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const items = btn.nextElementSibling;
        const open = items.style.display === 'block';
        items.style.display = open ? 'none' : 'block';
        btn.textContent = btn.textContent.replace(open ? '▲' : '▼', open ? '▼' : '▲');
      });
    });

    // Clic en móvil: carga y cierra overlay
    mobIdx.querySelectorAll('.index-item').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        loadTerm(a.dataset.id);
        window.location.hash = a.dataset.id;
        document.querySelector('.mobile-categories-menu').style.display = 'none';
      });
    });
  }
}

// Carga y muestra un término
async function loadTerm(id) {
  const term = (await loadTerms()).find(t => t.id === id);
  const main = document.querySelector('.glossary-content');
  try {
    const resp = await fetch(`glosario/${id}.html`);
    const txt  = await resp.text();
    main.innerHTML = `<article>${txt}</article>`;
  } catch {
    main.innerHTML = `<article>
                        <h2>${term.term}</h2>
                        <p>${term.shortDef}</p>
                      </article>`;
  }
}
