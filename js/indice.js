document.addEventListener('DOMContentLoaded', () => {
    // Toggle categorías
    document.querySelectorAll('.category-toggle').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const category = e.target.closest('.index-category');
            const items = category.querySelector('.index-items');
            
            category.classList.toggle('collapsed');
            items.style.display = items.style.display === 'none' ? 'block' : 'none';
            toggle.innerHTML = toggle.innerHTML.includes('▼') ? 
                toggle.innerHTML.replace('▼', '▲') : 
                toggle.innerHTML.replace('▲', '▼');
        });
    });

    // Manejo de ítems
    document.querySelectorAll('.index-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href');
            
            // Ocultar todas las tarjetas
            document.querySelectorAll('.content-card').forEach(card => {
                card.classList.remove('active');
            });
            
            // Mostrar tarjeta objetivo
            const targetCard = document.querySelector(targetId);
            if(targetCard) {
                targetCard.classList.add('active');
                
                // Scroll suave en móvil
                if(window.innerWidth < 768) {
                    targetCard.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
// Modifica el evento click de los ítems
item.addEventListener('click', async (e) => {
    e.preventDefault();
    const pageUrl = item.getAttribute('data-page'); // Ej: data-page="lipograma.html"
    
    try {
        const response = await fetch(pageUrl);
        const content = await response.text();
        
        document.querySelector('.content-area').innerHTML = content;
    } catch (error) {
        console.error('Error loading content:', error);
    }
});
