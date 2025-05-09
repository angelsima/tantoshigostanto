export function initTextoAnimado() {
    const textos = [
        { fijo: "Amanece.", variable: "", borrarVariable: false },
        { fijo: "Amanece.", variable: " La", borrarVariable: true },
        { fijo: "Amanece.", variable: " Una viej", borrarVariable: false },
        { fijo: "Amanece. Una", variable: " anciana sale", borrarVariable: false },
        { fijo: "Amanece. Una anciana sale", variable: " de su casa", borrarVariable: true },
        { fijo: "Amanece. Una anciana sale", variable: " al huerto", borrarVariable: true },
        { fijo: "Amanece.", variable: " La anciana sale", borrarVariable: true },
        { fijo: "", variable: "Cuando amanece,", borrarVariable: true },    
        { fijo: "", variable: "...", borrarVariable: true },
        { fijo: "", variable: "#@!!!!", borrarVariable: true },
        { fijo: "", variable: "Al amanec", borrarVariable: true },
        { fijo: "", variable: "¿Amanece?", borrarVariable: true },
        { fijo: "", variable: "😭", borrarVariable: true },
        { fijo: "", variable: "Cuand", borrarVariable: true },
        { fijo: "", variable: "Tras", borrarVariable: true },
        { fijo: "", variable: "[Mira... mañana sigo]", borrarVariable: true },
        { fijo: "", variable: "[Tengo que pensar]", borrarVariable: false },
    ];

    let indexTexto = 0;
    let indexChar = 0;
    const elementoTexto = document.getElementById('texto');
    const velocidadEscritura = 120;
    const velocidadBorrado = 120;
    const pausaEntreTextos = 500;
    let fase = 'escribiendo';
    let textoActual = '';

    function mostrarConCursor(texto) {
        elementoTexto.innerHTML = texto + '<span class="cursor-parpadeo">|</span>';
    }

    function escribirTexto() {
        if (indexTexto >= textos.length) {
            const ultimoTexto = textos[textos.length - 1];
            elementoTexto.innerHTML = ultimoTexto.fijo + ultimoTexto.variable;
            return;
        }

        const item = textos[indexTexto];
        textoActual = item.fijo + item.variable;

        if (fase === 'escribiendo') {
            const textoMostrar = textoActual.substring(0, indexChar + 1);
            mostrarConCursor(textoMostrar);
            indexChar++;

            if (indexChar === textoActual.length) {
                fase = item.borrarVariable ? 'retrocediendo' : 'espera';
                setTimeout(escribirTexto, pausaEntreTextos);
            } else {
                setTimeout(escribirTexto, velocidadEscritura);
            }
        }
        else if (fase === 'retrocediendo') {
            const posicionBorrado = item.fijo.length;
            const textoMostrar = textoActual.substring(0, indexChar - 1);
            mostrarConCursor(textoMostrar);
            indexChar--;

            if (indexChar === posicionBorrado) {
                siguienteTexto();
            } else {
                setTimeout(escribirTexto, velocidadBorrado);
            }
        }
        else if (fase === 'espera') {
            siguienteTexto();
        }
    }

    function siguienteTexto() {
        indexTexto++;
        if (indexTexto < textos.length) {
            const next = textos[indexTexto];
            indexChar = next.fijo.length;
            fase = 'escribiendo';
            setTimeout(escribirTexto, pausaEntreTextos);
        } else {
            const ultimoTexto = textos[textos.length - 1];
            elementoTexto.innerHTML = ultimoTexto.fijo + ultimoTexto.variable;
        }
    }

    escribirTexto();
}
