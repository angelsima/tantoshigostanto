// js/posts/perfeccionista.js
export function initTextoAnimado() {
    const textos = [
        "Tantos higos, tanto sol",
        "Tantos siglos, tanta voz",
        "Tantos libros, tanto amor",
        "Tantos mitos, tanta razón"
    ];
    
    let indexTexto = 0;
    let indexChar = 0;
    let borrando = false;
    const elementoTexto = document.getElementById('texto');
    const velocidadEscritura = 100;
    const velocidadBorrado = 50;
    const pausaEntreTextos = 1500;

    function escribirTexto() {
        const textoActual = textos[indexTexto];
        
        if (!borrando) {
            elementoTexto.innerHTML = textoActual.substring(0, indexChar + 1) + '<span class="cursor-parpadeo">|</span>';
            indexChar++;
            
            if (indexChar === textoActual.length) {
                borrando = true;
                setTimeout(escribirTexto, pausaEntreTextos);
            } else {
                setTimeout(escribirTexto, velocidadEscritura);
            }
        } else {
            elementoTexto.innerHTML = textoActual.substring(0, indexChar - 1) + '<span class="cursor-parpadeo">|</span>';
            indexChar--;
            
            if (indexChar === 0) {
                borrando = false;
                indexTexto = (indexTexto + 1) % textos.length;
                setTimeout(escribirTexto, velocidadEscritura);
            } else {
                setTimeout(escribirTexto, velocidadBorrado);
            }
        }
    }

    // Iniciar animación
    escribirTexto();
}
