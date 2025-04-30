document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializar categorías
    document.querySelectorAll('.index-category').forEach(category => {
        const toggle = category.querySelector('.category-toggle');
        if(!toggle) return;
        
        const items = category.querySelector('.index-items');
        const isCollapsed = category.classList.contains('collapsed');
        
        items.style.display = isCollapsed ? 'none' : 'block';
        toggle.innerHTML = isCollapsed ? 
            toggle.textContent.replace('▼', '▲') : 
            toggle.textContent.replace('▲', '▼');
    });

    // 2. Toggle categorías
    document.querySelectorAll('.category-toggle').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            const category = e.target.closest('.index-category');
            const items = category.querySelector('.index-items');
            const isCollapsed = items.style.display === 'none';
            
            items.style.display = isCollapsed ? 'block' : 'none';
            toggle.innerHTML = isCollapsed ? 
                toggle.textContent.replace('▲', '▼') : 
                toggle.textContent.replace('▼', '▲');
        });
    });

    // 3. Manejo de ítems
    document.querySelectorAll('.index-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href');
            showContent(targetId);
        });
    });

    // 4. Botón aleatorio
    const randomButton = document.querySelector('.random-card-trigger');
    if(randomButton) {
        randomButton.addEventListener('click', (e) => {
            e.preventDefault();
            showRandomCard();
        });
    }

    // 5. Carga inicial
    const hash = window.location.hash;
    if(hash) {
        showContent(hash);
    } else {
        showRandomCard();
    }
});

// Función para mostrar contenido específico
function showContent(targetId) {
    document.querySelectorAll('.content-card').forEach(card => {
        card.classList.remove('active');
    });
    
    const targetCard = document.querySelector(targetId);
    if(targetCard) {
        targetCard.classList.add('active');
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Función para mostrar tarjeta aleatoria
function showRandomCard() {
    const cards = Array.from(document.querySelectorAll('.content-card'));
    if(cards.length === 0) return;

    const activeCards = cards.filter(card => card.offsetParent !== null);
    const visibleCards = activeCards.length > 0 ? activeCards : cards;
    
    const randomIndex = Math.floor(Math.random() * visibleCards.length);
    const randomCard = visibleCards[randomIndex];
    
    showContent(`#${randomCard.id}`);
    randomCard.classList.add('random-highlight');
    
    setTimeout(() => {
        randomCard.classList.remove('random-highlight');
    }, 1000);
}
