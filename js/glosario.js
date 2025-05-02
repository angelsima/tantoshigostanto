document.addEventListener('DOMContentLoaded', async () => {
  const terms = await loadTerms();
  renderIndex(terms);
  // Si hay hash, carga ese término; si no, muestra el primero
  const hash = window.location.hash.replace('#','');
  if(hash && terms.find(t=>t.id===hash)) {
    loadTerm(hash);
  } else if(terms.length) {
    loadTerm(terms[0].id);
  }
});

async function loadTerms() {
  try {
    const resp = await fetch('glosario/glosario-manifest.json');
    return await resp.json();
  } catch (e) {
    console.error('Error cargando términos:', e);
    return [];
  }
}

function renderIndex(terms) {
  const idx = document.querySelector('.side-index');
  const byCat = {};
  terms.forEach(t => {
    (byCat[t.category] ||= []).push(t);
  });
  
  let html = '';
  // Ordenar categorías alfabéticamente
  const sortedCategories = Object.keys(byCat).sort((a, b) => a.localeCompare(b));
  
  for (const cat of sortedCategories) {
    // Ordenar términos alfabéticamente dentro de cada categoría
    const sortedTerms = byCat[cat].sort((a, b) => a.term.localeCompare(b.term));
    
    html += `<div class="index-category collapsed">
               <button class="category-toggle">${cat} ▼</button>
               <div class="index-items">
                 ${sortedTerms.map(t=>`<a href="#${t.id}" class="index-item" data-id="${t.id}">
                                 ${t.term}
                               </a>`).join('')}
               </div>
             </div>`;
  }
  
  idx.innerHTML = html;
  document.querySelectorAll('.category-toggle').forEach(btn=>{
    btn.addEventListener('click', e=>{
      const cat = e.target.closest('.index-category');
      const items = cat.querySelector('.index-items');
      const show = items.style.display==='none';
      items.style.display = show?'block':'none';
      e.target.textContent = show? e.target.textContent.replace('▼','▲') 
                                 : e.target.textContent.replace('▲','▼');
    });
  });
  document.querySelectorAll('.index-item').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      loadTerm(a.dataset.id);
      window.location.hash = a.dataset.id;
    });
  });
}
async function loadTerm(id) {
  const term = (await loadTerms()).find(t=>t.id===id);
  const main = document.querySelector('.content-area');
  // si tienes HTML largo:
  try {
    const resp = await fetch(`glosario/${id}.html`);
    const txt  = await resp.text();
    main.innerHTML = `<article>${txt}</article>`;
  } catch {
    // usa la definición breve del manifest
    main.innerHTML = `<article>
                        <h2>${term.term}</h2>
                        <p>${term.shortDef}</p>
                      </article>`;
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
