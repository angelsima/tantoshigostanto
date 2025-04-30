document.addEventListener('DOMContentLoaded', () => {
    // Inicializar categorías
    document.querySelectorAll('.index-category').forEach(category => {
        const toggle = category.querySelector('.category-toggle');
        const items = category.querySelector('.index-items');
        
        // Estado inicial basado en la clase 'collapsed'
        if(category.classList.contains('collapsed')) {
            items.style.display = 'none';
            toggle.innerHTML = toggle.innerHTML.replace('▼', '▲');
        }
    });

    // Toggle categorías
    document.querySelectorAll('.category-toggle').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            const category = e.target.closest('.index-category');
            const items = category.querySelector('.index-items');
            const isCollapsed = items.style.display === 'none';
            
            items.style.display = isCollapsed ? 'block' : 'none';
            toggle.innerHTML = isCollapsed ? 
                toggle.innerHTML.replace('▲', '▼') : 
                toggle.innerHTML.replace('▼', '▲');
        });
    });
});

// Manejo de ítems
document.querySelectorAll('.index-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = item.getAttribute('href');
        
        // Remover clase active de todas las tarjetas
        document.querySelectorAll('.content-card').forEach(card => {
            card.classList.remove('active');
        });
        
        // Activar tarjeta objetivo
        const targetCard = document.querySelector(targetId);
        if(targetCard) {
            targetCard.classList.add('active');
            
            // Forzar repintado para la animación
            void targetCard.offsetWidth;
            
            // Scroll solo en móvil
            if(window.innerWidth < 768) {
                targetCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// Cargar contenido basado en el hash de la URL
function loadInitialContent() {
    const hash = window.location.hash;
    if(hash) {
        const targetCard = document.querySelector(hash);
        if(targetCard) targetCard.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', loadInitialContent);
window.addEventListener('hashchange', loadInitialContent);

// Función para mostrar contenido aleatorio
function showRandomContent() {
    const items = document.querySelectorAll('.index-item:not(.random-item)');
    if(items.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * items.length);
    const randomItem = items[randomIndex];
    
    // Simular click en el item aleatorio
    randomItem.click();
    
    // Destacar temporalmente
    randomItem.style.backgroundColor = '#f5f3ff';
    setTimeout(() => {
        randomItem.style.backgroundColor = '';
    }, 1000);
      }

// Añadir evento al botón
document.querySelector('.random-item').addEventListener('click', (e) => {
    e.preventDefault();
    showRandomContent();
});

