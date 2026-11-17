

document.addEventListener("DOMContentLoaded", () => {
    const contenidoOriginal = document.getElementById("contenido-unico").innerHTML;

    const layout = `
        <div id="contenedor-global">
            <header id="cabecera">
                <h1></h1>
            </header>

            <div id="area-dividida">
                <aside id="sidebar">
                    <nav>
                        <ul>
                            <li><a href="index.html">home</a></li>
                            <li><a href="about.html">about me</a></li>
                            <li><a href="socials.html">socials</a></li>
                            <li><a href="reviews.html">music</a></li>
                            <li><a href="https://melafiori.atabook.org/" target="_blank">guestbook</a></li>
                        </ul>
                    </nav>

                    ${generarCajaUpdates()}
                    
                    <div class="sidebar-box" style="margin-top": 10px; text-align: center;">
                        <img src="https://yokai.crd.co/assets/images/gallery09/1e0277fe.gif?v=b4df531c" alt="wip">
                    </div>

                    <img src="resources/images/doggy.gif" style="width: 50%; margin-top: 10px; border-radius: 10px; left: 25%; position: relative;" alt="doggy gif">
                </aside>


                <main id="contenido-principal">
                    ${contenidoOriginal}
                </main>
            </div>

            <footer id="pie-pagina">
                <p>&copy; 2026 #1 apple lover</p>
            </footer>

            <img src="resources/images/image57.gif" id="gif-esquina" alt="toro gif">
        </div>
    `;

    document.body.innerHTML = layout;
    
});

