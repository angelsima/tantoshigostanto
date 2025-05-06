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

// Cerrar overlay al hacer clic fuera del índice
document.querySelector('.mobile-categories-menu')
  ?.addEventListener('click', e => {
    if (e.target === e.currentTarget) {
      e.currentTarget.style.display = 'none';
    }
  });

// Carga el manifest del glosario
async function loadTerms() {
  try {
    const resp = await fetch('./glosario/glosario-manifest.json');
    return await resp.json();
  } catch (e) {
    console.error('Error cargando términos:', e);
    return [];
  }
}

// Renderiza el índice de términos con categorías, subcategorías y "sin sub"
function renderIndex(terms) {
  const idx = document.querySelector('.side-index');
  if (!idx) return;

  // ——> 1) AGRUPAR términos por categoría y subcategoría
  const byCat = {};
  terms.forEach(t => {
    const cat = t.category || 'Sin categoría';
    const sub = t.subcategory?.trim() || '__SIN_SUBCAT__';

    if (!byCat[cat]) {
      byCat[cat] = { __SIN_SUBCAT__: [] };
    }

    if (sub === '__SIN_SUBCAT__') {
      byCat[cat].__SIN_SUBCAT__.push(t);
    } else {
      if (!byCat[cat][sub]) byCat[cat][sub] = [];
      byCat[cat][sub].push(t);
    }
  });

  // ——> 2) GENERAR HTML
  let html = '';
  Object.keys(byCat).sort((a,b) => a.localeCompare(b)).forEach(cat => {
    html += `<div class="index-category">
               <button type="button" class="category-toggle">${cat} ▼</button>
               <div class="index-subcats">`;

    // 2.a) sub‑categorías ordenadas
    Object.keys(byCat[cat])
      .filter(sub => sub !== '__SIN_SUBCAT__')
      .sort((a,b) => a.localeCompare(b))
      .forEach(sub => {
        const arr = byCat[cat][sub].sort((x,y) => x.term.localeCompare(y.term));
        html += `
        <div class="index-subcategory">
          <button type="button" class="subcategory-toggle">${sub} ▶</button>
          <div class="index-items">
            ${arr.map(t => `<a href="#${t.id}" class="index-item" data-id="${t.id}">${t.term}</a>`).join('')}
          </div>
        </div>`;
      });

  +   // 2.b) términos sin subcategoría: los ponemos directamente dentro de .index-subcats
+   const noSub = byCat[cat].__SIN_SUBCAT__;
+   if (noSub.length) {
+     html += noSub
+       .sort((x,y) => x.term.localeCompare(y.term))
+       .map(t => `<a href="#${t.id}" class="index-item no-sub-item" data-id="${t.id}">${t.term}</a>`)
+       .join('');
+   }

    html += `  </div>
             </div>`;
  });

  idx.innerHTML = html;

  // ——> 3) OCULTAR todo inicialmente
  idx.querySelectorAll('.index-subcats, .index-items').forEach(el => el.style.display = 'none');

  // ——> 4) Toggle categorías
  idx.querySelectorAll('.category-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const subcats = btn.nextElementSibling;
      const open = subcats.style.display === 'block';
      subcats.style.display = open ? 'none' : 'block';
      btn.textContent = btn.textContent.replace(open ? '▲' : '▼', open ? '▼' : '▲');
    });
  });

  // ——> 5) Toggle sub‑categorías
  idx.querySelectorAll('.subcategory-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const items = btn.nextElementSibling;
      const open = items.style.display === 'block';
      items.style.display = open ? 'none' : 'block';
      btn.textContent = btn.textContent.replace(open ? '▼' : '▶', open ? '▶' : '▼');
    });
  });

  // ——> 6) Click en término
  idx.querySelectorAll('.index-item').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      loadTerm(a.dataset.id);
      window.location.hash = a.dataset.id;
    });
  });

  // ——> 7) Clonar a móvil (igual lógica)
  const mobIdx = document.querySelector('.mobile-side-index');
  if (mobIdx) {
    mobIdx.innerHTML = html;
    mobIdx.querySelectorAll('.index-subcats, .index-items').forEach(el => el.style.display = 'none');

    mobIdx.querySelectorAll('.category-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const s = btn.nextElementSibling, o = s.style.display === 'block';
        s.style.display = o ? 'none' : 'block';
        btn.textContent = btn.textContent.replace(o ? '▲' : '▼', o ? '▼' : '▲');
      });
    });
    mobIdx.querySelectorAll('.subcategory-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const it = btn.nextElementSibling, o = it.style.display === 'block';
        it.style.display = o ? 'none' : 'block';
        btn.textContent = btn.textContent.replace(o ? '▼' : '▶', o ? '▶' : '▼');
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
