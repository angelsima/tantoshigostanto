document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.subcategory-button');
    const optionCards = document.querySelectorAll('.option-card');

    // Mostrar todas las tarjetas al inicio
    optionCards.forEach(card => card.style.display = 'block');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            
            // Resetear botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Si el botón ya estaba activo, mostrar todo
            if(button.classList.contains('active')) {
                optionCards.forEach(card => card.style.display = 'block');
                button.classList.remove('active');
            } else {
                // Filtrar
                button.classList.add('active');
                optionCards.forEach(card => {
                    card.style.display = card.dataset.category === category ? 'block' : 'none';
                });
            }
        });
    });

    // Botón "Mostrar todos" (opcional)
    const showAll = document.createElement('button');
    showAll.textContent = 'Mostrar todos';
    showAll.className = 'subcategory-button';
    showAll.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        optionCards.forEach(card => card.style.display = 'block');
    });
    document.querySelector('.subcategory-buttons').prepend(showAll);
});
