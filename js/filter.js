// En tu archivo JavaScript (ej: filter.js)
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.subcategory-button');
    const optionCards = document.querySelectorAll('.option-card');

    // Filtrado inicial: mostrar todas
    optionCards.forEach(card => card.style.display = 'block');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            
            // Remover activo de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Toggle estado activo
            const isActive = button.classList.contains('active');
            button.classList.toggle('active', !isActive);

            // Filtrar tarjetas
            optionCards.forEach(card => {
                if(category === 'all' || !button.classList.contains('active')) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 
                        card.dataset.category === category ? 'block' : 'none';
                }
            });
        });
    });

    // Opcional: Botón "Mostrar todos"
    const showAllButton = document.createElement('button');
    showAllButton.textContent = 'Mostrar todos';
    showAllButton.className = 'subcategory-button';
    showAllButton.dataset.category = 'all';
    document.querySelector('.subcategory-buttons').prepend(showAllButton);
});
