document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.subcategory-button:not(.show-all)');
    const optionCards = document.querySelectorAll('.option-card');
    const buttonsContainer = document.querySelector('.subcategory-buttons');

    // Botón "Mostrar todos"
    const showAllButton = document.createElement('button');
    showAllButton.textContent = 'Mostrar todos';
    showAllButton.className = 'subcategory-button show-all active';
    showAllButton.dataset.category = 'all';
    buttonsContainer.append(showAllButton);

    // Función de ordenamiento
    const sortCards = () => {
        const container = document.querySelector('.category-section');
        const visibleCards = Array.from(container.querySelectorAll('.option-card:not(.hidden)'));
        
        visibleCards.sort((a, b) => {
            const titleA = a.querySelector('.accordion').textContent.toLowerCase();
            const titleB = b.querySelector('.accordion').textContent.toLowerCase();
            return titleA.localeCompare(titleB);
        });

        visibleCards.forEach(card => container.appendChild(card));
    };

    // Filtrado
    const filterCards = (category) => {
        optionCards.forEach(card => {
            card.classList.toggle('hidden', !(category === 'all' || card.dataset.category === category));
        });
        sortCards();
    };

    // Eventos
    buttonsContainer.addEventListener('click', (e) => {
        if (!e.target.matches('.subcategory-button')) return;
        
        const button = e.target;
        const category = button.dataset.category;
        
        document.querySelectorAll('.subcategory-button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterCards(category);
    });

    // Inicialización
    filterCards('all');
});
