export function initAventura() {
    const storyData = {
    inicio: {
        texto: "Estás frente a un viejo castillo abandonado. ¿Qué haces?",
        opciones: [
            { texto: "Entrar por la puerta principal", siguiente: "puertaPrincipal" },
            { texto: "Buscar una entrada secreta", siguiente: "entradaSecreta" }
        ]
    },
    puertaPrincipal: {
        texto: "La puerta principal está atrancada. Escuchas ruidos dentro...",
        opciones: [
            { texto: "Forzar la puerta", siguiente: "finalMal" },
            { texto: "Retroceder y buscar otra entrada", siguiente: "entradaSecreta" }
        ]
    },
    entradaSecreta: {
        texto: "Encuentras una ventana abierta en la parte trasera",
        opciones: [
            { texto: "Saltar por la ventana", siguiente: "finalBueno" },
            { texto: "Regresar al frente del castillo", siguiente: "inicio" }
        ]
    },
    finalMal: {
        texto: "¡Una criatura te ataca! GAME OVER",
        opciones: []
    },
    finalBueno: {
        texto: "¡Encuentras un tesoro escondido! VICTORIA",
        opciones: []
    }
};
    class Aventura {
        // Datos de la historia (versión mejorada)

    constructor() {
        this.nodoActual = "inicio";
        this.storyText = document.getElementById('storyText');
        this.optionsContainer = document.getElementById('optionsContainer');
        this.cargarNodo(this.nodoActual);
    }

    cargarNodo(nodoId) {
        const nodo = storyData[nodoId];
        this.actualizarTexto(nodo.texto);
        this.limpiarOpciones();
        
        if (nodo.opciones.length > 0) {
            this.mostrarOpciones(nodo.opciones);
        } else {
            this.mostrarReinicio();
        }
    }

    actualizarTexto(texto) {
        this.storyText.textContent = texto;
    }

    limpiarOpciones() {
        this.optionsContainer.innerHTML = '';
    }

    mostrarOpciones(opciones) {
        opciones.forEach(opcion => {
            const boton = document.createElement('button');
            boton.className = 'option-btn';
            boton.textContent = opcion.texto;
            boton.addEventListener('click', () => {
                this.nodoActual = opcion.siguiente;
                this.cargarNodo(this.nodoActual);
            });
            this.optionsContainer.appendChild(boton);
        });
    }

    mostrarReinicio() {
        const botonReinicio = document.createElement('button');
        botonReinicio.className = 'option-btn restart-btn';
        botonReinicio.textContent = 'Jugar de nuevo';
        botonReinicio.addEventListener('click', () => {
            this.nodoActual = "inicio";
            this.cargarNodo(this.nodoActual);
        });
        this.optionsContainer.appendChild(botonReinicio);
    }
}

// Inicializar directamente sin esperar otro DOMContentLoaded
    const aventura = new Aventura();
    aventura.cargarNodo("inicio");
}
