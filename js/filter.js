
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.subcategory-button');
    const optionCards = document.querySelectorAll('.option-card');
    const buttonsContainer = document.querySelector('.subcategory-buttons');

    // 1. Añadir botón "Mostrar todos"
    const showAllButton = document.createElement('button');
    showAllButton.textContent = 'Mostrar todos';
    showAllButton.className = 'subcategory-button show-all active';
showAllButton.dataset.category = 'all';
buttonsContainer.append(showAllButton);

    // 2. Función de ordenamiento modificada
    const sortCardsAlphabetically = () => {
        const container = document.querySelector('.category-section');
        const cards = Array.from(document.querySelectorAll('.option-card:not(.hidden)'));
        
        cards.sort((a, b) => {
            const titleA = a.querySelector('.accordion').textContent.toLowerCase().trim();
            const titleB = b.querySelector('.accordion').textContent.toLowerCase().trim();
            return titleA.localeCompare(titleB);
        });

        cards.forEach(card => container.appendChild(card));
    };

    // 3. Función de filtrado actualizada
    const filterCards = (category) => {
        optionCards.forEach(card => {
            card.classList.toggle('hidden', !(category === 'all' || card.dataset.category === category));
        });
        sortCardsAlphabetically(); // Ordenar después de filtrar
    };

    // 4. Eventos corregidos
    buttonsContainer.addEventListener('click', (e) => {
        if (!e.target.matches('.subcategory-button')) return;

        const button = e.target;
        const category = button.dataset.category;

        filterButtons.forEach(btn => btn.classList.remove('active'));
        showAllButton.classList.remove('active');
        button.classList.add('active');
        
        filterCards(category);
    });

    // 5. Evento para "Mostrar todos"
    showAllButton.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        showAllButton.classList.add('active');
        filterCards('all');
    });

    // 6. Inicialización
    filterCards('all');
    sortCardsAlphabetically(); // Ordenar al cargar
});
