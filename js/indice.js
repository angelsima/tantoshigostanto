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
 // Random card
    document.querySelector('.random-card-trigger').addEventListener('click', (e) => {
        e.preventDefault();
        showRandomCard();
    });

 // Cargar contenido inicial
    const loadInitialContent = () => {
        const hash = window.location.hash;
        if(hash) {
            const targetCard = document.querySelector(hash);
            if(targetCard) targetCard.classList.add('active');
        } else {
            showRandomCard();
        }
    };
    
    loadInitialContent();
    window.addEventListener('hashchange', loadInitialContent);
});
// showRandomCard 
function showRandomCard() {
    const cards = Array.from(document.querySelectorAll('.content-card'));
    if(cards.length === 0) return;

    cards.forEach(card => card.classList.remove('active'));
    
    const randomIndex = Math.floor(Math.random() * cards.length);
    const randomCard = cards[randomIndex];
    
    randomCard.classList.add('active', 'random-highlight');
    window.history.replaceState(null, null, `#${randomCard.id}`);
    
    setTimeout(() => {
        randomCard.classList.remove('random-highlight');
    }, 1000);
    
    if(window.innerWidth < 768) {
        randomCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
