// js/posts/perfeccionista.js
export function initTextoAnimado() {
    const textos = [
        { fijo: "Amanece.", variable: " La", borrarVariable: true },
        { fijo: "Amanece.", variable: "Una viej", borrarVariable: false },
        { fijo: "Amanece. Una", variable: " viej", borrarVariable: true },
        { fijo: "Amanece. Una", variable: " anciana sale de", borrarVariable: false }, 
        { fijo: "Amanece.",  variable: "Una anciana sale de su casa", borrarVariable: true },
        { fijo: "Amanece. La anciana sale", variable: " al huerto", borrarVariable: false },
        { fijo: "", variable: "Amanece. La anciana sale al huerto, donde", borrarVariable: true },
        { fijo: "", variable: "Cuando amanece,", borrarVariable: true },    
        { fijo: "", variable: "...", borrarVariable: true },
        { fijo: "", variable: "#@!!!!", borrarVariable: true },
        { fijo: "", variable: "Al amanec", borrarVariable: true },
        { fijo: "", variable: "...", borrarVariable: true },
        { fijo: "", variable: "am", borrarVariable: true },
        { fijo: "", variable: "Amanecía", borrarVariable: true },
        { fijo: "", variable: "...", borrarVariable: true },
        { fijo: "", variable: "😭", borrarVariable: true},
        { fijo: "", variable: "        ", borrarVariable: false },
        { fijo: "", variable: "        ", borrarVariable: false } 
    ];

    // Variables de estado
 let indexTexto = 0;
  let indexChar = 0;
  const elementoTexto = document.getElementById('texto');
  const velocidadEscritura = 100;
  const velocidadBorrado = 100;
  const pausaEntreTextos = 1000;

  let fase = 'escribiendo';
  let textoActual = '';
  let modificacionRealizada = false;

  function escribirTexto() {
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
    // si quisieras mantener la pausa también cuando no borres:
    else if (fase === 'espera') {
      siguienteTexto();
    }
  }

  function siguienteTexto() {
    modificacionRealizada = false;
    indexTexto = (indexTexto + 1) % textos.length;
    const next = textos[indexTexto];
    indexChar = next.fijo.length;       // siempre parto tras la parte fija
    fase = 'escribiendo';
    setTimeout(escribirTexto, pausaEntreTextos);
  }

  escribirTexto();
}
