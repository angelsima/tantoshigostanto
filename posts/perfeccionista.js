// js/posts/perfeccionista.js
export function initTextoAnimado() {
    const textos = [
       {
        fijo: "Amanece. Una", // Parte que permanecerá
        variable: " viej",   // Parte que se borrará
        borrarVariable: true    // Controlar si se borra esta parte
    },
    {
        fijo: "Amanece.", // Mismo inicio
        variable: " Una anciana sale de", // Nueva variación
        borrarVariable: true
    }, 
          {
        fijo: "Amanece. La anciana", // Mismo inicio
        variable: "  sale de", // Nueva variación
        borrarVariable: true
    } 
        "Amanece. Una viej",
        "Amanece. Una anciana sale de su casa",
        "Amanece. Mi abuela Juana",
        "Amanece. Asunción sale de su",
        "..",
    "Los pájaros cantan y hay una higuera que",
    "A una anciana le vapicar una avipa",
    "#@!!!!",
    "es un dom",
    "Es un domingo por la mañana y Asun sale al huerto. Tiene hambre y",
    "Había amanecido",
    "Voy a empezar a cargme en todo como el descompuesto",
    "Amanece y una anciana va al huerto. A su higuera y"
    ];
    
    let indexTexto = 0;
    let indexChar = 0;
    let borrando = false;
    const elementoTexto = document.getElementById('texto');
    const velocidadEscritura = 100;
    const velocidadBorrado = 50;
    const pausaEntreTextos = 1500;

    function escribirTexto() {
        const item = textos[indexTexto];
    const textoCompleto = item.fijo + item.variable;
        
        if (!borrando) {
                // Escribir normalmente
        const textoVisible = textoCompleto.substring(0, indexChar + 1);
        elementoTexto.innerHTML = textoVisible + '<span class="cursor-parpadeo">|</span>';
        indexChar++;
        
        if (indexChar === textoCompleto.length) {
            if (item.borrarVariable) {
                borrando = true;
                setTimeout(escribirTexto, pausaEntreTextos);
            } else {
                // Pasar al siguiente texto sin borrar
                indexTexto = (indexTexto + 1) % textos.length;
                indexChar = item.fijo.length; // Empezar después de la parte fija
                setTimeout(escribirTexto, pausaEntreTextos);
            }
        } else {
            setTimeout(escribirTexto, velocidadEscritura);
        }
    } else {
        // Borrar solo la parte variable
        const textoVisible = item.fijo + item.variable.substring(0, indexChar - item.fijo.length);
        elementoTexto.innerHTML = textoVisible + '<span class="cursor-parpadeo">|</span>';
        indexChar--;
        
        if (indexChar === item.fijo.length) {
            borrando = false;
            indexTexto = (indexTexto + 1) % textos.length;
            indexChar = item.fijo.length; // Mantener posición de la parte fija
            setTimeout(escribirTexto, velocidadEscritura);
        } else {
            setTimeout(escribirTexto, velocidadBorrado);
        }
    }
 const textoObj = textos[indexTexto];
    let texto = textoObj.contenido;
    const posicionModificar = textoObj.modificarPosicion;
    
    switch(fase) {
        case 'escribiendo':
            elementoTexto.innerHTML = texto.substring(0, indexChar + 1) + '<span class="cursor-parpadeo">|</span>';
            indexChar++;
            
            if (indexChar === texto.length) {
                fase = 'retrocediendo';
                posicionOriginal = texto.length;
                setTimeout(escribirTexto, pausaEntreTextos);
            } else {
                setTimeout(escribirTexto, velocidadEscritura);
            }
            break;
            
        case 'retrocediendo':
            elementoTexto.innerHTML = texto.substring(0, indexChar - 1) + '<span class="cursor-parpadeo">|</span>';
            indexChar--;
            
            if (indexChar === posicionModificar) {
                fase = 'modificando';
                texto = texto.substring(0, posicionModificar) + 
                        textoObj.caracterCorreccion + 
                        texto.substring(posicionModificar + 1);
                setTimeout(escribirTexto, velocidadBorrado);
            } else {
                setTimeout(escribirTexto, velocidadBorrado);
            }
            break;
            
        case 'modificando':
            elementoTexto.innerHTML = texto.substring(0, posicionModificar + 1) + 
                                    '<span class="cursor-parpadeo">|</span>' + 
                                    texto.substring(posicionModificar + 1);
            fase = 'avanzando';
            indexChar = posicionModificar + 1;
            setTimeout(escribirTexto, velocidadEscritura);
            break;
            
        case 'avanzando':
            elementoTexto.innerHTML = texto.substring(0, indexChar + 1) + 
                                    '<span class="cursor-parpadeo">|</span>' + 
                                    texto.substring(indexChar + 1);
            indexChar++;
            
            if (indexChar === posicionOriginal) {
                fase = 'escribiendo';
                indexTexto = (indexTexto + 1) % textos.length;
                indexChar = 0;
                setTimeout(escribirTexto, pausaEntreTextos);
            } else {
                setTimeout(escribirTexto, velocidadEscritura);
            }
            break;
    }
    }

    // Iniciar animación
    escribirTexto();
}
