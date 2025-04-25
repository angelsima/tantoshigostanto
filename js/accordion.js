// coger todos los disparadores
const acc = document.querySelectorAll('.accordion');

acc.forEach(header => {
  header.addEventListener('click', () => {
    // cerrar todos los paneles abiertos excepto el actual
    document.querySelectorAll('.panel').forEach(p => {
      if (p !== header.nextElementSibling) {
        p.style.display = 'none';
      }
    });

    // alternar el panel junto al header clicado
    const panel = header.nextElementSibling;
    panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
  });
});
