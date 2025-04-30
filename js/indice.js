// Interactividad
document.addEventListener('DOMContentLoaded', () => {
    // Toggle categorías
    document.querySelectorAll('.category-toggle').forEach(toggle => {
        toggle.addEventListener('click', () => {
            const category = toggle.parentElement;
            const items = category.querySelector('.index-items');
            
            category.classList.toggle('collapsed');
            items.style.display = items.style.display === 'none' ? 'block' : 'none';
            toggle.innerHTML = toggle.innerHTML.includes('▼') ? 
                toggle.innerHTML.replace('▼', '▲') : 
                toggle.innerHTML.replace('▲', '▼');
        });
    });

    // Navegación entre items
    document.querySelectorAll('.index-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remover activo de todos
            document.querySelectorAll('.index-item').forEach(i => i.classList.remove('active'));
            document.querySelectorAll('.content-card').forEach(c => c.classList.remove('active'));
            
            // Activar elemento seleccionado
            const targetId = item.getAttribute('href');
            item.classList.add('active');
            document.querySelector(targetId).classList.add('active');
            
            // Scroll suave en móvil
            if(window.innerWidth < 768) {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
