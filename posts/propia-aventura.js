// Datos de la historia (estructura modular)
const storyData = {
    1: {
        text: "Estás frente a un viejo castillo abandonado. ¿Qué haces?",
        options: [
            { text: "Entrar por la puerta principal", nextId: 2 },
            { text: "Buscar una entrada secreta", nextId: 3 }
        ]
    },
    2: {
        text: "La puerta principal está atrancada. Escuchas ruidos dentro...",
        options: [
            { text: "Forzar la puerta", nextId: 4 },
            { text: "Retroceder y buscar otra entrada", nextId: 3 }
        ]
    },
    3: {
        text: "Encuentras una ventana abierta en la parte trasera",
        options: [
            { text: "Saltar por la ventana", nextId: 5 },
            { text: "Regresar al frente del castillo", nextId: 1 }
        ]
    },
    4: {
        text: "Logras abrir la puerta pero haces mucho ruido. ¡Una criatura te ataca!",
        options: []
    },
    5: {
        text: "Caes en una habitación llena de tesoros. ¡Has ganado!",
        options: []
    }
};

class Aventura {
    constructor() {
        this.storyText = document.getElementById('storyText');
        this.optionsContainer = document.getElementById('optionsContainer');
        this.loadNode(1); // Iniciar con el primer nodo
    }

    loadNode(nodeId) {
        const node = storyData[nodeId];
        this.updateStoryText(node.text);
        this.clearOptions();
        
        node.options.length > 0 
            ? this.showOptions(node.options) 
            : this.showRestart();
    }

    updateStoryText(text) {
        this.storyText.textContent = text;
    }

    clearOptions() {
        this.optionsContainer.innerHTML = '';
    }

    showOptions(options) {
        options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option.text;
            button.addEventListener('click', () => this.loadNode(option.nextId));
            this.optionsContainer.appendChild(button);
        });
    }

    showRestart() {
        const restartButton = document.createElement('button');
        restartButton.className = 'option-btn restart-btn';
        restartButton.textContent = 'Volver a empezar';
        restartButton.addEventListener('click', () => this.loadNode(1));
        this.optionsContainer.appendChild(restartButton);
    }
}

// Iniciar la aventura cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => new Aventura());
