export function initTextoAnimado() {
    const textos = [
        { fijo: "Amanece.", variable: "", borrarVariable: false },
        { fijo: "Amanece.", variable: " La", borrarVariable: true },
        { fijo: "Amanece.", variable: " Una viej", borrarVariable: false },
        { fijo: "Amanece. Una", variable: " anciana sale", borrarVariable: false },
        { fijo: "Amanece. Una anciana sale",  variable: " de su casa", borrarVariable: true },
        { fijo: "Amanece. Una anciana sale", variable: " al huerto", borrarVariable: true },
        { fijo: "Amanece.", variable: " La anciana sale", borrarVariable: true },
        { fijo: "", variable: "Cuando amanece,", borrarVariable: true },    
        { fijo: "", variable: "...", borrarVariable: true },
        { fijo: "", variable: "#@!!!!", borrarVariable: true },
        { fijo: "", variable: "Al amanec", borrarVariable: true },
        { fijo: "", variable: "am", borrarVariable: true },
        { fijo: "", variable: "¿Amanece?", borrarVariable: true },
        { fijo: "", variable: "😭", borrarVariable: true},
        { fijo: "", variable: "Cuand", borrarVariable: true },
        { fijo: "", variable: "Tras", borrarVariable: true },  
        { fijo: "", variable: "[Tengo que pensarlo. Mañana sigo]", borrarVariable: true },
        { fijo: "", variable: "   ", borrarVariable: false },
    ];

    // Variables de estado
    let indexTexto = 0;
    let indexChar = 0;
    const elementoTexto = document.getElementById('texto');
    const velocidadEscritura = 100;
    const velocidadBorrado = 100;
    const pausaEntreTextos = 500;

    let fase = 'escribiendo';
    let textoActual = '';
    let modificacionRealizada = false;

    function escribirTexto() {
        // Verificar si hemos llegado al último texto
        if (indexTexto >= textos.length) {
            // Mostrar el último texto permanentemente
            const ultimoTexto = textos[textos.length - 1];
            elementoTexto.innerHTML = ultimoTexto.fijo + ultimoTexto.variable;
            return; // Salir de la función para detener la animación
        }

        const item = textos[indexTexto];
        textoActual = item.fijo + item.variable;

        if (fase === 'escribiendo') {
            let textoMostrar = textoActual.substring(0, indexChar + 1);
            elementoTexto.innerHTML = textoMostrar + '<span class="cursor-parpadeo">|</span>';
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
            elementoTexto.innerHTML = textoMostrar + '<span class="cursor-parpadeo">|</span>';
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
        modificacionRealizada = false;
        indexTexto++;
        
        if (indexTexto < textos.length) {
            const next = textos[indexTexto];
            indexChar = next.fijo.length;
            fase = 'escribiendo';
            setTimeout(escribirTexto, pausaEntreTextos);
        } else {
            // Al final, mostrar el último texto sin cursor
            const ultimoTexto = textos[textos.length - 1];
            elementoTexto.innerHTML = ultimoTexto.fijo + ultimoTexto.variable;
        }
    }

    escribirTexto();
}
