// js/posts/perfeccionista.js
export function initTextoAnimado() {
    const textos = [
        "Una viej",
        "Una anciana sale de su casa al",
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
