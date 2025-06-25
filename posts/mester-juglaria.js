export function initJuglaria() {
    // Array con las distintas versiones
    const poemVersions = [
        {
            versionLabel: "Versión 1",
            content: `
                <section class="mester-section">
                    <h2>1</h2>
                    <div class="mester-verso"><span class="mester-hemistiquio">De la so tripa</span> <span class="mester-hemistiquio">tan fuertemientre rugiendo</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">tornávase en l’alcoba</span><span class="mester-hemistiquio">e estava maneçiendo.</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">Oyó piar falcones</span> <span class="mester-hemistiquio">e gorriones del çielo,</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">trotavan cient cavallos</span><span class="mester-hemistiquio">que fazién tronar el suelo,</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">e se les sumávan</span> <span class="mester-hemistiquio">los solloços de los vientos.</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">Sospiró mia Sión,</span><span class="mester-hemistiquio">la más ortelana de tod tiempos,</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">separó muy presta</span> <span class="mester-hemistiquio">de la alcoba el su cuerpo</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">e fablós’ a sí mia Sión,</span><span class="mester-hemistiquio">ca sempre fállase en lo çierto:</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">—Si por gradar a Dios</span> <span class="mester-hemistiquio">aliviar mi fambre quiero</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">duda ý non hay,</span><span class="mester-hemistiquio">debo exir al huerto—.</span>                    </div>
                </section>
                <section class="mester-section">
                    <h2>2</h2>
                    <div class="mester-verso"><span class="mester-hemistiquio">La de canos cavellos</span> <span class="mester-hemistiquio">exida es de la posada,</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">e quand’ travessó el unbral</span>  <span class="mester-hemistiquio">ovo de prestar batalla:</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">diez y dos canes rabiados</span>  <span class="mester-hemistiquio">menaçantes le ladraban,</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">mas sabe mia Sión,</span><span class="mester-hemistiquio">ca en buen hora es despiertada,</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">doblegar mil huestes</span><span class="mester-hemistiquio">sin aiuda de mesnadas.</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">Arrancó co’l puño</span>  <span class="mester-hemistiquio">de la su puerta la aldaba,</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">era est’ de fierro</span>  <span class="mester-hemistiquio">e en su mano muy pesada,</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">lançóla con tal fuerça</span> <span class="mester-hemistiquio">contra aqueias dentelladas</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">ca si non diera en sus bocas</span>  <span class="mester-hemistiquio">mill leguas travessara.</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">Los nemigos de Sión</span><span class="mester-hemistiquio">al sofrir tal aldabada</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">admiraron su certeça</span>  <span class="mester-hemistiquio">e pensaron la escapada,</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">la más güertana de los tiempos,</span><span class="mester-hemistiquio">mia Sión, la de El Lugar,</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">con la su misericordia</span>  <span class="mester-hemistiquio">permitióles que s’andaran;</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">non es eia vengante</span><span class="mester-hemistiquio">ni ha ningún humana falla,</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">a Sión sól la vençe el fame,</span> <span class="mester-hemistiquio">mas tamén el fame l’aguijaba.</span>                    </div>
                </section>
                <section class="mester-section">
                    <h2>3</h2>
                    <div class="mester-verso"><span class="mester-hemistiquio">Alcançó la huerta,</span>  <span class="mester-hemistiquio">la mejor de las aüelas,</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">fincó los hinojos</span>    <span class="mester-hemistiquio">e las manos en la tierra,</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">gradó al Señor su suerte</span><span class="mester-hemistiquio">por lavralla aún podella</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">e cuidar de las sus plantas,</span> <span class="mester-hemistiquio">ca non permite que l’mueran.</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">En compensa el Señor</span><span class="mester-hemistiquio">a Sión, la grande verdulera,</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">da frutos e comeres</span><span class="mester-hemistiquio">tantos como ella quiera,</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">pues non hay en vida</span> <span class="mester-hemistiquio">vasalla qual es ella,</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">ca en sus manos los mançanos</span> <span class="mester-hemistiquio">son capaçes de dar peras.</span>                    </div>
                </section>
                <section class="mester-section">
               <h2>4</h2>
                <div class="mester-verso"><span class="mester-hemistiquio">Encontrávasse allá</span><span class="mester-hemistiquio">árbol de longeva edade</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">e visitávalo Sión</span><span class="mester-hemistiquio">sienpre del almuerço antes,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">pues dávale a yantar</span><span class="mester-hemistiquio">figos que son en verdat manjares,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">figos como antanyo,</span><span class="mester-hemistiquio">ca non troviés en la cibdade.</span></div>
                </section>
                <section class="mester-section">
                <h2>5</h2>
                <div class="mester-verso"><span class="mester-hemistiquio">Yegó aína Sión,</span><span class="mester-hemistiquio">la de los canos cavellos,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">a la bel’ figuera</span><span class="mester-hemistiquio">e quiso los figos cogellos.</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">Alço la mano</span><span class="mester-hemistiquio">por prender un grand’ i bueno</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">mas quando cerróla</span><span class="mester-hemistiquio">sentió grave picor de dedo,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">ca un abiespa,</span><span class="mester-hemistiquio">de color ‘mariello e negro,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">fízole picaçón</span><span class="mester-hemistiquio">pora quest figo defendello.</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">Sopo bien mia Sión,</span><span class="mester-hemistiquio">ca sempre fállase en lo çierto,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">prender con presteça</span><span class="mester-hemistiquio">prossimo a la abiespa l’suelo,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">ca si l’suelo prendido</span><span class="mester-hemistiquio">non es vezino al picamento</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">non servirié jamás</span><span class="mester-hemistiquio">el misericordial remiendo.</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">Al’ venturosa tierra</span><span class="mester-hemistiquio">annadióle del romero</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">el roçio matinal</span><span class="mester-hemistiquio">pra aý mesmo umedecello,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">e fiz’ ansí un barro</span><span class="mester-hemistiquio">que iuntóse por el dedo</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">e alivióse mía Sión,</span><span class="mester-hemistiquio">la más güertana de tod tiempos.</span></div>
                </section>
                <section class="mester-section">
                <h2>6</h2>
                <div class="mester-verso"><span class="mester-hemistiquio">Sofrido há la de El Lugar</span><span class="mester-hemistiquio">e vencido los dolores</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">ca non ay yuso l’çielo</span><span class="mester-hemistiquio">omne ni mugier d’igual onores,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">desfiz los sus pasos</span><span class="mester-hemistiquio">e tornó a la figuer’ enorme,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">non teme la contienda</span><span class="mester-hemistiquio">ca Dios dióle mil dones.</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">Prendió un nuevo figo</span><span class="mester-hemistiquio">Sión, la de vivos verdores,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">e con el comello</span><span class="mester-hemistiquio">de los sus nemigos vengóse.</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">—Grado al rey del çielo</span><span class="mester-hemistiquio">—dixo mia Sión conforme—</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">mi fame finada es,</span><span class="mester-hemistiquio">e al fin questa vassalla pode</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">olvidar las sus cuitas</span><span class="mester-hemistiquio">e iniçiar cristianas lavores.</span></div>
                </section>
            `
        },
        {
            versionLabel: "Versión 2",
            content: `
             <section class="mester-section">
               <h2>1</h2>
                <div class="mester-verso"><span class="mester-hemistiquio">De las sos entrañas</span><span class="mester-hemistiquio">tan fuertemientre rugiendo</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">desvélose mia Sión,</span><span class="mester-hemistiquio">ca estava maneçiendo.</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">Oyó piar falcones</span><span class="mester-hemistiquio">e gorriones en el cielo,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">trotavan miles cavallos</span><span class="mester-hemistiquio">que fazién tronar el suelo,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">Sospiró mia Sión,</span><span class="mester-hemistiquio">la más ortetana de tod tiempos,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">e separó muy presta</span><span class="mester-hemistiquio">de la alcoba el su cuerpo.</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">Fablós’ a sí mia Sión,</span><span class="mester-hemistiquio">ca sempre fállase en lo çierto,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">—Si por gradar a Dios</span><span class="mester-hemistiquio">aliviar mi fambre quiero</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">duda ý non hay,</span><span class="mester-hemistiquio">debo exir al huerto—.</span></div>
                </section>
                 <section class="mester-section">
               <h2>2</h2>
                <div class="mester-verso"><span class="mester-hemistiquio">La de canos cavellos</span><span class="mester-hemistiquio">exida es de la posada,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">e quand’ travessó el unbral</span><span class="mester-hemistiquio">ovo de prestar batalla</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">un millar de canes</span><span class="mester-hemistiquio">menaçantes le ladraban,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">mas sabe mia Sión,</span><span class="mester-hemistiquio">ca en buen hora es despiertada,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">ahuyentar mil huestes</span><span class="mester-hemistiquio">sin aiuda de mesnadas.</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">Arrancó co’l puño</span><span class="mester-hemistiquio">ca grand fuerça demostrava.</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">Los nemigos de Sión</span><span class="mester-hemistiquio">pensaron la escapada,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">la más ortelana de tod tiempos,</span><span class="mester-hemistiquio">mia Sión, la de El Lugar,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">permitió que los mil canes</span><span class="mester-hemistiquio">espantados s’escaparan,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">ca non es eia vengante</span><span class="mester-hemistiquio">ni ha ningún humana falla.</span></div>
                </section>
                 <section class="mester-section">
                    <h2>3</h2>
                    <div class="mester-verso"><span class="mester-hemistiquio">Alcançó la huerta,</span>  <span class="mester-hemistiquio">la mejor de las aüelas,</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">fincó los hinojos</span>    <span class="mester-hemistiquio">e las manos en la tierra,</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">gradó al Señor su suerte</span><span class="mester-hemistiquio">por lavralla aún podella</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">e cuidar de las sus plantas,</span> <span class="mester-hemistiquio">ca non permite que l’mueran.</span>                    </div>
                      </section>
             <section class="mester-section">
               <h2>4</h2>
                <div class="mester-verso"><span class="mester-hemistiquio">Encontrávasse allá</span><span class="mester-hemistiquio">árbol de longeva edade</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">e visitávalo Sión</span><span class="mester-hemistiquio">sienpre del almuerço antes,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">pues dávale a yantar</span><span class="mester-hemistiquio">figos que son en verdat manjares,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">figos como antanyo,</span><span class="mester-hemistiquio">ca non troviés en la cibdade.</span></div>
                </section>
                <section class="mester-section">
                <h2>5</h2>
                <div class="mester-verso"><span class="mester-hemistiquio">Yegó aína Sión,</span><span class="mester-hemistiquio">la de los canos cavellos,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">a la bel’ figuera</span><span class="mester-hemistiquio">e quiso los figos cogellos.</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">Alço la mano</span><span class="mester-hemistiquio">por prender un grand’ i bueno</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">mas un abiespa</span><span class="mester-hemistiquio">de color ‘mariello e negro,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">fízole picaçón</span><span class="mester-hemistiquio">pora quest figo defendello.</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">Sopo bien mia Sión,</span><span class="mester-hemistiquio">ca sempre fállase en lo çierto,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">prender con presteça</span><span class="mester-hemistiquio">prossimo a la abiespa l’suelo,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">Al’ venturosa tierra</span><span class="mester-hemistiquio">annadióle del romero</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">el roçio matinal</span><span class="mester-hemistiquio">pra aý mesmo umedecello,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">e fiz’ ansí un barro</span><span class="mester-hemistiquio">que iuntóse por el dedo</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">e alivióse mía Sión,</span><span class="mester-hemistiquio">la más ortelana de tod tiempos.</span></div>
                </section>
                <section class="mester-section">
                <h2>6</h2>
                <div class="mester-verso"><span class="mester-hemistiquio">Sofrido há la de El Lugar</span><span class="mester-hemistiquio">e vencido los dolores</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">ca non ay yuso l’çielo</span><span class="mester-hemistiquio">omne ni mugier d’igual onores,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">desfiz los sus pasos</span><span class="mester-hemistiquio">e tornó a la figuer’ enorme,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">non teme la contienda</span><span class="mester-hemistiquio">ca Dios dióle mil dones.</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">Prendió un nuevo figo</span><span class="mester-hemistiquio">Sión, la de vivos verdores,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">e con el comello</span><span class="mester-hemistiquio">de los sus nemigos vengóse.</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">—Grado al rey del çielo</span><span class="mester-hemistiquio">—dixo mia Sión conforme—</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">mi fame finada es,</span><span class="mester-hemistiquio">e al fin questa vassalla pode</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">olvidar las sus cuitas</span><span class="mester-hemistiquio">e iniçiar cristianas lavores.</span></div>
                </section>	 
	
            `
        },
        {
            versionLabel: "Versión 3",
            content: `
                <section class="mester-section">
               <h2>1</h2>
                <div class="mester-verso"><span class="mester-hemistiquio">De las sos entrañas</span><span class="mester-hemistiquio">tan fuertemientre rugiendo</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">desvélose mia Sión,</span><span class="mester-hemistiquio">ca estava maneçiendo.</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">Sospiró mia Sión,</span><span class="mester-hemistiquio">la más ortetana de tod tiempos,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">e fablós’ a sí mia Sión:</span><span class="mester-hemistiquio">—Debo exir al huerto—.</span></div>
                </section>
                <section class="mester-section">
                    <h2>2</h2>
                    <div class="mester-verso"><span class="mester-hemistiquio">Alcançó la huerta,</span>  <span class="mester-hemistiquio">la mejor de las aüelas,</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">gradó al Señor su suerte</span><span class="mester-hemistiquio">por lavralla aún podella</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">Sabed, non hay en vida</span> <span class="mester-hemistiquio">uertana qual es ella</span>                    </div>
                    <div class="mester-verso"><span class="mester-hemistiquio">ca en sus manos los mançanos</span> <span class="mester-hemistiquio">son capaçes de dar peras.</span>                    </div>
                      </section>
                <section class="mester-section">
                <h2>3</h2>
                <div class="mester-verso"><span class="mester-hemistiquio">Yegó aína Sión,</span><span class="mester-hemistiquio">la de los canos cavellos,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">a la bel’ figuera</span><span class="mester-hemistiquio">e quiso los figos cogellos.</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">Alço la mano</span><span class="mester-hemistiquio">por prender un grand’ i bueno</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">mas un abiespa</span><span class="mester-hemistiquio">de color ‘mariello e negro,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">fízole picaçón</span><span class="mester-hemistiquio">pora quest figo defendello.</span></div>
                </section>
             <section class="mester-section">
                <h2>4</h2>
                <div class="mester-verso"><span class="mester-hemistiquio">La de El Lugar</span><span class="mester-hemistiquio">rauda vençe los dolores</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">ca non ay yuso l’çielo</span><span class="mester-hemistiquio">omne ni mugier d’igual onores.</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">Non teme la contienda</span><span class="mester-hemistiquio">ca Dios dióle mil dones,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">prendió un nuevo figo</span><span class="mester-hemistiquio">Sión, la de vivos verdores,</span></div>
                <div class="mester-verso"><span class="mester-hemistiquio">e con el comello</span><span class="mester-hemistiquio">de los sus nemigos vengóse.</span></div>
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
        <button class="reload-btn" aria-label="Recargar versión">🗣</button>
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
