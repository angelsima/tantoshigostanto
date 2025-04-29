document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.subcategory-button');
    const optionCards = document.querySelectorAll('.option-card');
    const buttonsContainer = document.querySelector('.subcategory-buttons');

  
    // Función de filtrado
    const filterCards = (category) => {
        optionCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    };

    // Eventos para todos los botones
    buttonsContainer.addEventListener('click', (e) => {
        if (!e.target.matches('.subcategory-button')) return;

        const button = e.target;
        const category = button.dataset.category;

        // Remover activo de todos
        filterButtons.forEach(btn => btn.classList.remove('active'));
        showAllButton.classList.remove('active');

        // Aplicar estado
        button.classList.add('active');
        filterCards(category);
    });

 
    // Filtrado inicial
    filterCards('all');
});
