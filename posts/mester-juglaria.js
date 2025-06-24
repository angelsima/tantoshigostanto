export function initJuglaria() {
    // Array con las distintas versiones
    const poemVersions = [
        {
            versionLabel: "Versión 1",
            content: `
                <section class="mester-section">
                    <h2>1</h2>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">De la so tripa</span> <span class="mester-hemistiquio">tan fuertemientre rugiendo</span>                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">tornávase en l’alcoba</span><span class="mester-hemistiquio">e estava maneçiendo.</span>                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">Oyó piar falcones</span> <span class="mester-hemistiquio">e gorriones del çielo,</span>                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">trotavan cient cavallos</span><span class="mester-hemistiquio">que fazién tronar el suelo,</span>                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">e se les sumávan</span> <span class="mester-hemistiquio">los solloços de los vientos.</span>                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">Sospiró mia Sión,</span><span class="mester-hemistiquio">la más ortelana de tod tiempos,</span>                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">separó muy presta</span> <span class="mester-hemistiquio">de la alcoba el su cuerpo</span>                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">e fablós’ a sí mia Sión,</span><span class="mester-hemistiquio">ca sempre fállase en lo çierto:</span>                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">—Si por gradar a Dios</span> <span class="mester-hemistiquio">aliviar mi fambre quiero</span>                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">duda ý non hay,</span><span class="mester-hemistiquio">debo exir al huerto—.</span>                    </div>
                </section>
                <section class="mester-section">
                    <h2>2</h2>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">La de canos cavellos</span> <span class="mester-hemistiquio">exida es de la posada,</span>                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">e quand’ travessó el unbral</span>  <span class="mester-hemistiquio">ovo de prestar batalla:</span>                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">diez y dos canes rabiados</span>  <span class="mester-hemistiquio">menaçantes le ladraban,</span>                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">mas sabe mia Sión,</span><span class="mester-hemistiquio">ca en buen hora es despiertada,</span>                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">doblegar mil huestes</span><span class="mester-hemistiquio">sin aiuda de mesnadas.</span>                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">Arrancó co’l puño</span>  <span class="mester-hemistiquio">de la su puerta la aldaba,</span>                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">era est’ de fierro</span>  <span class="mester-hemistiquio">e en su mano muy pesada,</span>                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">lançóla con tal fuerça</span> <span class="mester-hemistiquio">contra aqueias dentelladas</span>                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">ca si non diera en sus bocas</span>  <span class="mester-hemistiquio">mill leguas travessara.</span>                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">Los nemigos de Sión</span><span class="mester-hemistiquio">al sofrir tal aldabada</span>                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">admiraron su certeça</span>  <span class="mester-hemistiquio">e pensaron la escapada,</span>                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">la más güertana de los tiempos,</span><span class="mester-hemistiquio">mia Sión, la de El Lugar,</span>                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">con la su misericordia</span>  <span class="mester-hemistiquio">permitióles que s’andaran;</span>                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">non es eia vengante</span><span class="mester-hemistiquio">ni ha ningún humana falla,</span>                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">a Sión sól la vençe el fame,</span> <span class="mester-hemistiquio">mas također el fame l’aguijaba.</span>                    </div>
                </section>
                <section class="mester-section">
                    <h2>3</h2>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">Alcançó la huerta,</span>  <span class="mester-hemistiquio">la mejor de las aüelas,</span>                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">fincó los hinojos</span>    <span class="mester-hemistiquio">e las manos en la tierra,</span>                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">gradó al Señor su suerte</span><span class="mester-hemistiquio">por lavralla aún podella</span>                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">e cuidar de las sus plantas,</span> <span class="mester-hemistiquio">ca non permite que l’mueran.</span>
                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">En compensa el Señor</span><span class="mester-hemistiquio">a Sión, la grande verdulera,</span>
                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">da frutos e comeres</span><span class="mester-hemistiquio">tantos como ella quiera,</span>
                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">pues non hay en vida</span> <span class="mester-hemistiquio">vasalla qual es ella,</span>
                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">ca en sus manos los mançanos</span> <span class="mester-hemistiquio">son capaçes de dar peras.</span>
                    </div>
                </section>
            `
        },
        {
            versionLabel: "Versión 2",
            content: `
                <section class="mester-section">
                    <h2>1</h2>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">Alcançó la huerta,</span>
                        <span class="mester-hemistiquio">la mejor de las aüelas,</span>
                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">fincó los hinojos</span>
                        <span class="mester-hemistiquio">e las manos en la tierra,</span>
                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">gradó al Señor su suerte</span>
                        <span class="mester-hemistiquio">por lavralla aún podella</span>
                    </div>
                    <!-- Puedes agregar más versos o secciones -->
                </section>
            `
        },
        {
            versionLabel: "Versión 3",
            content: `
                <section class="mester-section">
                    <h2>1</h2>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">De la so tripa</span>
                        <span class="mester-hemistiquio">tan fuertemientre rugiendo</span>
                    </div>
                    <div class="mester-verso">
                        <span class="mester-hemistiquio">tornávase en l’alcoba</span>
                        <span class="mester-hemistiquio">e estava maneçiendo.</span>
                    </div>
                    <!-- Otra variante si quieres -->
                </section>
            `
        }
        // Añade más versiones aquí si deseas
    ];

    // Obtenemos el contenedor dentro del post HTML ya cargado.
    const container = document.getElementById("mester-container");
    if (!container) {
        console.error("initJuglaria: no se encontró #mester-container");
        return;
    }

    if (poemVersions.length === 0) {
        container.innerHTML = "<p>No hay versiones disponibles.</p>";
        return;
    }

    // Creamos estructura base: botón reload + contenedor interno para versión
    container.innerHTML = `
        <button class="reload-btn" aria-label="Recargar versión">🔁</button>
        <div class="version-info"></div>
        <div class="version-content"></div>
    `;

    const btn = container.querySelector(".reload-btn");
    const contentDiv = container.querySelector(".version-content");

    // Función que elige al azar y muestra la versión en version-content
    function renderRandomVersion() {
        const idx = Math.floor(Math.random() * poemVersions.length);
        const selected = poemVersions[idx];
        contentDiv.innerHTML = selected.content;
    }

    // Listener en el botón
    btn.addEventListener("click", () => {
        renderRandomVersion();
    });

    // Mostrar la primera versión al cargar
    renderRandomVersion();
}
