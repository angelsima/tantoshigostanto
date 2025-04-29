  // Botón "Mostrar todos"
    const showAllButton = document.createElement('button');
    showAllButton.textContent = 'Mostrar todos';
    showAllButton.className = 'subcategory-button active';
    showAllButton.dataset.category = 'all';
    buttonsContainer.prepend(showAllButton);

// Opcional: Botón "Mostrar todos"
    const showAllButton = document.createElement('button');
    showAllButton.textContent = 'Mostrar todos';
    showAllButton.className = 'subcategory-button';
    showAllButton.dataset.category = 'all';
    document.querySelector('.subcategory-buttons').prepend(showAllButton);
