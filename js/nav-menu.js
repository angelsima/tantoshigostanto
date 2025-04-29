   
     document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if(currentPage === linkPage) {
            link.classList.add('activo');
            if(link.classList.contains('dropdown-item')) {
                link.closest('.custom-dropdown').querySelector('.dropdown-toggle').classList.add('activo');
            }
        }
    });
    
    // Cerrar menú al hacer click fuera
    document.addEventListener('click', (e) => {
        if(!e.target.closest('.custom-dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.display = 'none';
            });
        }
    });
});
