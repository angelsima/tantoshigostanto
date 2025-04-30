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
