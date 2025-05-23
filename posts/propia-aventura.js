export function initAventura() {
    if (!document.getElementById('aventuraStoryText') || !document.getElementById('optionsContainer')) {
        console.error('Elementos del DOM no encontrados');
        return;
    }
    const storyData = {
     inicio: {
    texto: "Sale el sol, pían los pájaros. La anciana ya está despierta, así que",
    opciones: [
      { texto: "se mira al espejo para comprobar el paso del tiempo en sus arrugas kársticas", siguiente: "espejo" },
      { texto: "va hacia la puerta y sale de casa", siguiente: "sueno" }
    ]
  },
  espejo: {
    texto: "El tiempo no se detiene, y a la vez se repite, día tras día, texto a texto. Ya ni recuerda que se llama Asun, de tan acostumbrada que está a que la llamen &quot;la anciana&quot;, a mirarse al espejo y pensar en que el tiempo se repite, día tras día, texto a texto. Suspira.",
    opciones: [
      { texto: "Le escupe al espejo.", siguiente: "rebelde" },
      { texto: "Se aleja del espejo y va hacia la puerta del patio.", siguiente: "sale" }
    ]
  },
  sueno: {
    texto: "¡¿CÓMO?! ¡¿Dónde está su huerto?! Al abrir la puerta ha salido a un pasillo de un bloque de edificios y hay un payaso que le lanza estrellas de mar que a su vez lanzan púas de erizo. El suelo del pasillo es de arena y el mar le moja los pies. Su padre le grita —¿papá?, no te veo desde que te ahogaste en— desde dentro del agua. Las púas de erizo se le clavan en los tobillos y de pronto",
    opciones: [
      { texto: "abre los ojos. Puta pesadilla recurrente.", siguiente: "sale" },
      { texto: "el payaso echa a volar bajo la arena y la lleva con ella.", siguiente: "sueno2" }
    ]
  },
  sueno2: {
    texto: "Siente que no puede respirar. La arena le entra por nariz y boca. Le raspa los ojos. Se asfixia. Está a punto de morir pero, justo entonces,",
    opciones: [
      { texto: "se despierta", siguiente: "sale" },
      { texto: "una ola se lleva la arena y la saca de la cama, empapada. Se ve frente a la puerta de su patio", siguiente: "sueno3" }
    ]
  },
  sale: {
    texto: "Al fin, sale de casa. Va al huerto, a su higuera.",
    opciones: [
      { texto: "Alza la mano para coger un higo, lo palpa y", siguiente: "dolor" }
    ]
  },
  dolor: {
    texto: "siente una punzada de dolor. Una avispa le ha picado",
    opciones: [
      { texto: "coge arcilla para hacer un barro", siguiente: "arcilla" }
    ]
  },
  arcilla: {
    texto: "Entra a casa a por agua, humedece la tierra y",
    opciones: [
      { texto: "se unta el barro en la picadura", siguiente: "remedio" }
    ]
  },
  remedio: {
    texto: "Aliviada",
    opciones: [
      { texto: "vuelve a salir al huerto", siguiente: "sale2" }
    ]
  },
  sale2: {
    texto: "Se acerca a la higuera de nuevo, busca otro higo y",
    opciones: [
      { texto: "lo agarra y se lo come", siguiente: "fin" }
    ]
  },
  fin: {
    texto: "Pues ya estaría.",
    opciones: [
      { texto: "Volver al inicio", siguiente: "inicio" }
    ]
  },
  rebelde: {
    texto: "🚧",
    opciones: []
  },
  sueno3: {
    texto: "🚧",
    opciones: []
  }
};
    class Aventura {
        // Datos de la historia (versión mejorada)

    constructor() {
        this.nodoActual = "inicio";
        this.storyText = document.getElementById('aventuraStoryText');
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
}
