// js/posts/perfeccionista.js
export function initTextoAnimado() {
    const textos = [
          {
            fijo: "Amanece.", 
            variable: "La",
            borrarVariable: true
        },
{
            fijo: "Amanece. Una", 
            variable: " viej",
            borrarVariable: true,
     modificarPosicion: 3, // Posición en el texto completo (fijo + variable)
    caracterCorreccion: "X"
        },

        {
            fijo: "Amanece. Una", 
            variable: " anciana sale de",
            borrarVariable: false
        }, 

        {
            fijo: "Amanece. Una anciana sale de", 
            variable: "",
            borrarVariable: false,
                    },
                {
            fijo: "Amanece. La anciana sale",
            variable: " de su casa",
            borrarVariable: true
        },

           {
        fijo: "Amanece. La anciana sale", // Mismo inicio
        variable: " al huerto", // Nueva variación
        borrarVariable: false
    },
           {
        fijo: "Amanece. La anciana sale al huerto", // Mismo inicio
        variable: ", donde", // Nueva variación
        borrarVariable: false
    },

           {
        fijo: "", // Mismo inicio
        variable: "Amanece. La anciana sale al huerto, donde", // Nueva variación
        borrarVariable: true
    },
 {
        fijo: "", // Mismo inicio
        variable: "  Cuando, amanece,", // Nueva variación
        borrarVariable: true
    },    
 {
        fijo: "", // Mismo inicio
        variable: "...", // Nueva variación
        borrarVariable: true
    },
 {
        fijo: " ", // Mismo inicio
        variable: "", // Nueva variación
        borrarVariable: true
    },
 {
        fijo: " ", // Mismo inicio
        variable: "", // Nueva variación
        borrarVariable: true
    } 
    ];

    // Variables de estado
    let indexTexto = 0;
    let indexChar = 0;
    let borrando = false;
    const elementoTexto = document.getElementById('texto');
    const velocidadEscritura = 100;
    const velocidadBorrado = 50;
    const pausaEntreTextos = 1500;
    
    // Variables para modificación específica
    let fase = 'escribiendo';
    let textoActual = '';
    let modificacionRealizada = false;

    function escribirTexto() {
        const item = textos[indexTexto];
        textoActual = item.fijo + item.variable;

        switch(fase) {
            case 'escribiendo':
                // Escribir normalmente
                let textoMostrar = textoActual.substring(0, indexChar + 1);
                
                // Aplicar modificación si corresponde
                if (item.modificarPosicion !== undefined && 
                    indexChar >= item.modificarPosicion && 
                    !modificacionRealizada) {
                    
                    textoMostrar = 
                        textoActual.substring(0, item.modificarPosicion) +
                        item.caracterCorreccion +
                        textoActual.substring(item.modificarPosicion + 1, indexChar + 1);
                    
                    modificacionRealizada = true;
                }
                
                elementoTexto.innerHTML = textoMostrar + '<span class="cursor-parpadeo">|</span>';
                indexChar++;
                
                if (indexChar === textoActual.length) {
                    if (item.borrarVariable) {
                        fase = 'retrocediendo';
                        setTimeout(escribirTexto, pausaEntreTextos);
                    } else {
                        siguienteTexto();
                    }
                } else {
                    setTimeout(escribirTexto, velocidadEscritura);
                }
                break;

            case 'retrocediendo':
                // Borrar solo la parte variable
                const posicionBorrado = item.fijo.length;
                const textoMostrar = textoActual.substring(0, indexChar - 1);
                elementoTexto.innerHTML = textoMostrar + '<span class="cursor-parpadeo">|</span>';
                indexChar--;
                
                if (indexChar === posicionBorrado) {
                    siguienteTexto();
                } else {
                    setTimeout(escribirTexto, velocidadBorrado);
                }
                break;
        }
    }

    function siguienteTexto() {
        modificacionRealizada = false;
        indexTexto = (indexTexto + 1) % textos.length;
        
        // Iniciar después de la parte fija si existe
        const nextItem = textos[indexTexto];
        indexChar = nextItem.fijo ? nextItem.fijo.length : 0;
        
        fase = 'escribiendo';
        setTimeout(escribirTexto, pausaEntreTextos);
    }

    // Iniciar animación
    escribirTexto();
}
       
