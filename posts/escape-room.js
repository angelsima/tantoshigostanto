export function initEscapeRoom() {
    const escapeRoom = {
  solution: 'THT',
  init() {
    this.inputs = [...document.querySelectorAll('.escape-code-input')];
    this.btn = document.getElementById('escapeCheckButton');
    
    // Configurar eventos de entrada
    this.inputs.forEach((input, index) => {
      input.value = ''; // Reset inicial
      input.addEventListener('input', (e) => this.handleInput(e, index));
    });
    
    // Evento del botón
    this.btn.addEventListener('click', () => this.checkCode());
  },

  handleInput(e, index) {
    const input = e.target;
    // Filtrado y formato
    input.value = input.value.toUpperCase().replace(/[^A-Z]/g, '');
    
    // Navegación automática garantizada
    if(input.value.length === 1 && index < 2) {
      this.inputs[index + 1].focus();
    }
    if(input.value === '' && index > 0) {
      this.inputs[index - 1].focus();
    }
  },

  checkCode() {
    const code = this.inputs.map(i => i.value).join('');
    
    if(code === this.solution) {
      this.showSuccess();
      setTimeout(() => this.nextLevel(), 1500);
      return true;
    }
    
    this.showError();
    return false;
  },

  showSuccess() {
    this.inputs.forEach(i => i.classList.add('success'));
    this.btn.textContent = '¡Éxito!';
    this.btn.style.backgroundColor = '#007E33';
  },

  showError() {
    this.inputs.forEach(i => {
      i.classList.add('error');
      setTimeout(() => i.classList.remove('error'), 1000);
    });
  },

  nextLevel() {
    document.getElementById('escapeStoryText').innerHTML = `
      ¡Puerta abierta! <br>
      <em>Segundo puzzle:</em> Encuentras un cofre con símbolos: ⯁♣☢<br>
      <strong>Pista:</strong> "Las iniciales de Tres Hijos del Tendero"
    `;
    document.querySelector('.code-container').innerHTML = `
      <div style="margin-top: 30px; font-size: 1.2em">
        <button onclick="location.reload()" 
                style="padding: 10px 20px; font-size: 16px; margin-top: 20px">
          Reiniciar Juego
        </button>
      </div>
    `;
  }
   
};
escapeRoom.init();   
}  
