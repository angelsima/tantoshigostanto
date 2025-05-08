// js/posts/perfeccionista.js
export function initTextoAnimado() {
    const textos = [
        {
            fijo: "Amanece. Una", 
            variable: " viej",
            borrarVariable: true
        },
        {
            fijo: "Amanece.", 
            variable: " Una anciana sale de",
            borrarVariable: true
        }, 
        {
            fijo: "Amanece. La anciana", 
            variable: "  sale de",
            borrarVariable: true
        },
        // Resto de textos como objetos válidos
        {
            fijo: "Amanece. Una viej",
            variable: "",
            borrarVariable: false
        },
        {
            fijo: "Amanece. Una anciana sale de su casa",
            variable: "",
            borrarVariable: false
        },
           {
        fijo: "Amanece. La anciana", // Mismo inicio
        variable: "  sale de", // Nueva variación
        borrarVariable: true
    }    
    ];

    let indexTexto = 0;
    let indexChar = 0;
    let borrando = false;
    const elementoTexto = document.getElementById('texto');
    const velocidadEscritura = 100;
    const velocidadBorrado = 50;
    const pausaEntreTextos = 1500;

    // Variables para el nuevo sistema de fases
    let fase = 'escribiendo';
    let posicionOriginal = 0;
    let textoActual = '';

    function escribirTexto() {
        const item = textos[indexTexto];
        textoActual = item.fijo + item.variable;

        switch(fase) {
            case 'escribiendo':
                elementoTexto.innerHTML = textoActual.substring(0, indexChar + 1) + '<span class="cursor-parpadeo">|</span>';
                indexChar++;
                
                if (indexChar === textoActual.length) {
                    if (item.borrarVariable) {
                        fase = 'retrocediendo';
                        posicionOriginal = textoActual.length;
                    } else {
                        indexTexto = (indexTexto + 1) % textos.length;
                        indexChar = 0;
                    }
                    setTimeout(escribirTexto, pausaEntreTextos);
                } else {
                    setTimeout(escribirTexto, velocidadEscritura);
                }
                break;

            case 'retrocediendo':
                elementoTexto.innerHTML = textoActual.substring(0, indexChar - 1) + '<span class="cursor-parpadeo">|</span>';
                indexChar--;
                
                if (indexChar === item.fijo.length) {
                    fase = 'escribiendo';
                    indexTexto = (indexTexto + 1) % textos.length;
                    indexChar = textos[indexTexto].fijo.length;
                }
                setTimeout(escribirTexto, velocidadBorrado);
                break;
        }
    }

    // Iniciar animación
    escribirTexto();
}

       
