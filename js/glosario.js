// js/glosario.js

document.addEventListener('DOMContentLoaded', async () => {
  const terms = await loadTerms();
  renderIndex(terms);

  const main = document.querySelector('.glossary-content');
  main.innerHTML = '<article><p>Selecciona un término del índice para ver su contenido.</p></article>';

  const hash = window.location.hash.replace('#','');
  if (hash && terms.find(t => t.id === hash)) {
    loadTerm(hash);
  }

  document.querySelector('.mobile-index-header')
    ?.addEventListener('click', () => {
      document.querySelector('.mobile-categories-menu').style.display = 'block';
    });
});

document.querySelector('.mobile-categories-menu')
  ?.addEventListener('click', e => {
    if (e.target === e.currentTarget) {
      e.currentTarget.style.display = 'none';
    }
  });

async function loadTerms() {
  try {
    const resp = await fetch('./glosario/glosario-manifest.json');
    return await resp.json();
  } catch (e) {
    console.error('Error cargando términos:', e);
    return [];
  }
}

function renderIndex(terms) {
  const idx = document.querySelector('.side-index');
  if (!idx) return;

  // Agrupar términos
  const byCat = {};
  terms.forEach(t => {
    const cat = t.category || 'Sin categoría';
    const sub = t.subcategory?.trim() || '__SIN_SUBCAT__';
    
    if (!byCat[cat]) {
      byCat[cat] = { __SIN_SUBCAT__: [] };
    }

    sub === '__SIN_SUBCAT__' 
      ? byCat[cat].__SIN_SUBCAT__.push(t)
      : (byCat[cat][sub] = byCat[cat][sub] || []).push(t);
  });

  // Generar HTML
  let html = `
     <h3 class="categories-title">Categorías</h3>
    `;
  Object.keys(byCat).sort((a,b) => a.localeCompare(b)).forEach(cat => {
    const subcats = Object.keys(byCat[cat])
      .filter(sub => sub !== '__SIN_SUBCAT__')
      .sort((a,b) => a.localeCompare(b));
    
    const noSub = byCat[cat].__SIN_SUBCAT__.sort((a,b) => a.term.localeCompare(b.term));

    html += `<div class="index-category">
               <button type="button" class="category-toggle">${cat} ▼</button>
               <div class="category-content">`;

    // Subcategorías
     if (subcats.length > 0) {
      subcats.forEach(sub => {
        const items = byCat[cat][sub].sort((a, b) => a.term.localeCompare(b.term));
        html += `
          <div class="index-subcategory">
            <button type="button" class="subcategory-toggle">${sub} ▼</button>
            <div class="index-items">
              ${items.map(t => `<a href="#${t.id}" class="index-item" data-id="${t.id}">${t.term}</a>`).join('')}
            </div>
          </div>`;
      });
    }

    // Términos sin subcategoría
    if (noSub.length > 0) {
      html += `<div class="index-no-sub">
                ${noSub.map(t => `<a href="#${t.id}" class="index-item no-sub-item" data-id="${t.id}">${t.term}</a>`).join('')}
              </div>`;
    }

    html += `</div></div>`;
  });

  idx.innerHTML = html;

  // Configurar interactividad
  idx.querySelectorAll('.category-content, .index-items').forEach(el => el.style.display = 'none');

  // Toggle categorías
  idx.querySelectorAll('.category-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const isOpen = content.style.display === 'block';
      content.style.display = isOpen ? 'none' : 'block';
      btn.innerHTML = btn.innerHTML.replace(isOpen ? '▲' : '▼', isOpen ? '▼' : '▲');
    });
  });

  // Toggle subcategorías
 idx.querySelectorAll('.subcategory-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const items = btn.nextElementSibling;
      const isOpen = items.style.display === 'block';
      items.style.display = isOpen ? 'none' : 'block';
      btn.innerHTML = btn.innerHTML.replace(isOpen ? '▲' : '▼', isOpen ? '▼' : '▲');
    });
  });
  // Clicks en términos
  idx.querySelectorAll('.index-item').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      loadTerm(a.dataset.id);
      window.location.hash = a.dataset.id;
    });
  });

  // Clonar para móvil
  const mobIdx = document.querySelector('.mobile-side-index');
  if (mobIdx) {
    mobIdx.innerHTML = idx.innerHTML;
    mobIdx.querySelectorAll('.category-content, .index-items').forEach(el => el.style.display = 'none');

    mobIdx.querySelectorAll('.category-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        const isOpen = content.style.display === 'block';
        content.style.display = isOpen ? 'none' : 'block';
        btn.innerHTML = btn.innerHTML.replace(isOpen ? '▲' : '▼', isOpen ? '▼' : '▲');
      });
    });

    mobIdx.querySelectorAll('.subcategory-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const items = btn.nextElementSibling;
        const isOpen = items.style.display === 'block';
        items.style.display = isOpen ? 'none' : 'block';
        btn.innerHTML = btn.innerHTML.replace(isOpen ? '▼' : '▶', isOpen ? '▶' : '▼');
      });
    });

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

async function loadTerm(id) {
  const term = (await loadTerms()).find(t => t.id === id);
  const main = document.querySelector('.glossary-content');
  try {
    const resp = await fetch(`glosario/${id}.html`);
    main.innerHTML = `<article>${await resp.text()}</article>`;
  } catch {
    main.innerHTML = `<article>
                        <h2>${term.term}</h2>
                        <p>${term.shortDef}</p>
                      </article>`;
  }
}
