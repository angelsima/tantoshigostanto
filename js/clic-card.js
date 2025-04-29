document.addEventListener("DOMContentLoaded", function() {
  // Selección de tarjetas
  document.querySelectorAll('.option-card').forEach(card => {
    card.addEventListener('click', function(e) {
      // Evita que se active al hacer clic en el acordeón
      if (e.target.classList.contains('accordion')) return;
      
      // Remueve selección previa
      document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
      this.classList.add('selected');
      
      // Actualiza el panel
      const styleName = this.querySelector('.accordion').textContent;
      document.getElementById('selected-message').textContent = `Seleccionado: ${styleName}`;
      document.getElementById('action-button').classList.remove('hidden');
    });
  });

  // Botón de acción
  document.getElementById('action-button').addEventListener('click', function() {
    const selectedStyle = document.querySelector('.option-card.selected .accordion').textContent;
    alert(`¡Aplicando ${selectedStyle}!`);
  });
});
