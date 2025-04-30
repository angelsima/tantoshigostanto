// indice.js actualizado
document.addEventListener('DOMContentLoaded', () => {
    // Toggle categorías
    document.querySelectorAll('.category-toggle').forEach(toggle => {
        const category = toggle.closest('.index-category');
        const items = category.querySelector('.index-items');
        
        // Estado inicial
        if(category.classList.contains('collapsed')) {
            items.style.display = 'none';
            toggle.innerHTML = toggle.innerHTML.replace('▼', '▲');
        }

        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const wasCollapsed = items.style.display === 'none';
            
            items.style.display = wasCollapsed ? 'block' : 'none';
            toggle.innerHTML = wasCollapsed ? 
                toggle.innerHTML.replace('▲', '▼') : 
                toggle.innerHTML.replace('▼', '▲');
        });
    });

    // Manejo de contenido
    document.querySelectorAll('.index-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href');
            
            // Ocultar todo el contenido
            document.querySelectorAll('.content-card').forEach(card => {
                card.style.display = 'none';
            });
            
            // Mostrar contenido seleccionado
            const targetContent = document.querySelector(targetId);
            if(targetContent) {
                targetContent.style.display = 'block';
                targetContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
