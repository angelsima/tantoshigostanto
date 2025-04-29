// JavaScript para la interacción
document.querySelectorAll('.option-card').forEach(card => {
  card.addEventListener('click', function() {
    // Remover selección previa
    document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
    
    // Marcar tarjeta seleccionada
    this.classList.add('selected');
    
    // Actualizar panel
    const styleName = this.querySelector('h3').textContent;
    const constraints = this.dataset.constraints;
    
    document.getElementById('selected-message').innerHTML = `
      <strong>${styleName}</strong><br>
      <small>${constraints}</small>
    `;
    
    // Mostrar botón de acción
    const actionBtn = document.getElementById('action-button');
    actionBtn.classList.remove('hidden');
    actionBtn.textContent = `Usar "${styleName}"`;
  });
});

// Acción del botón (personalizable)
document.getElementById('action-button').addEventListener('click', function() {
  const selectedStyle = document.querySelector('.option-card.selected h3').textContent;
  alert(`¡Aplicando ${selectedStyle}!`); // Cambia esto por tu lógica
});
