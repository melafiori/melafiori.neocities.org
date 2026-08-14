document.addEventListener("DOMContentLoaded", function () {
  // Page has finished loading. Now, do things.
  loadLayoutByPetraPixel();
  const toggleButton = document.getElementById('sidebar-toggle');
  const sidebar = document.querySelector('.left-sidebar'); // Use querySelector for class

  if (toggleButton && sidebar) {
    toggleButton.addEventListener('click', () => {
      sidebar.classList.toggle('show');
    });
  }
  // Add any custom JavaScript code here...
});

function loadLayoutByPetraPixel() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToCurrentPage();
}

const nesting = getNesting();

function headerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `
  
      <!-- =============================================== -->
      <!-- HEADER -->
      <!-- =============================================== -->

      <header>

        <div class="header-content">
	        <div class="header-title">
	        <p></p>
	        </div>	        
        	
        </div>
      </header>

	  
        
      <!-- =============================================== -->
      <!-- LEFT SIDEBAR -->
      <!-- =============================================== -->

      <aside class="left-sidebar">
	  
        
        <!-- NAVIGATION -->
        <nav>
          <div class="sidebar-title">Navigation</div>
          <ul>
            <li><a href="${nesting}index.html">Home</a></li>
            <li><a href="${nesting}sites/reviews.html">Album Reviews</a></li>
            <li><a href="https://melafiori.atabook.org/" target="_blank">Guestbook</a></li>
          </ul>
        </nav>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Who am I?</div>
          <ul>
            <li>Cassie (username=Melafiori)</li>
            <li>She/her</li>
            <li>Transwoman</li>
            <li>22 y/o</li>
            <li>#1 Fan of apples!</li>
          </ul>
          <div class="sidebar-title">Socials</div>
            <ul>
              <li><a href="https://www.instagram.com/melafiori/" target="_blank">Instagram</a></li>
              <li><a href="https://bsky.app/profile/melafiori.bsky.social" target="_blank">Bluesky</a></li>
            </ul>
          </div>
          
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Buttons and blinkies</div>
          <div class="marquee-container">
            <div class="marquee-content">
              <img src="${nesting}images/buttons/0072-lesbian.gif">
              <img src="${nesting}images/buttons/site-created-without-ai.png">
              <img src="${nesting}images/buttons/button%20(1).gif">
              <img src="${nesting}images/buttons/transrights.gif">
              <img src="${nesting}images/buttons/firefox.gif">
              <img src="${nesting}images/buttons/emoticons.gif">
              <img src="${nesting}images/buttons/rainbow.png">
              <img src="${nesting}images/buttons/censorship.gif">
              <img src="${nesting}images/buttons/deletetiktok.webp" style="max-width: 150px">
              <img src="${nesting}images/buttons/queercode.png">
              <img src="${nesting}images/buttons/0178-mikuwink2.gif">
              </div>
          </div>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">He's just like me fr fr</div>
          <img class="full-width-image" src="${nesting}images/CATSCARF.jpg">
        </div>

        <div class="sidebar-section">
          <div id='apple-webring' data-apple="red">
            <div class="webring-row">
              <div class="webring-prev">
                <a href="https://sodahaunt.neocities.org">
                  <img class="arrow previous" src="https://poempuppy.neocities.org/assets/apple-arrow-previous.png">
                </a>
              </div>
              <a href="https://poempuppy.neocities.org/webring/apple.html" target="_blank">
                <img class="webring-img" src="https://poempuppy.neocities.org/assets/apple-red-apple.PNG">
              </a>
              <div class="webring-next">
                <a href="https://webbersite.neocities.org">
                  <img class="arrow next" src="https://poempuppy.neocities.org/assets/apple-arrow-next.png">
                </a>
              </div>
              <div class="webring-info">
                <div>Apple lovers Webring!</div>
                <div class="webring-links">
                  <a href="https://poempuppy.neocities.org/webring/apple.html" target="_blank" style="text-decoration: underline;">What is this?</a>
                </div>
              </div>


            </div>
            <script type="text/javascript" src="https://poempuppy.neocities.org/webring/onionring-variables.js"></script>
            <script type="text/javascript" src="https://poempuppy.neocities.org/webring/onionring-widget.js"></script>
          </div>
        </div>
      </aside>
	
      `;
}

function footerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `


      <!-- =============================================== -->
      <!-- FOOTER -->
      <!-- =============================================== -->

      <footer>
          <p>Memento mori,memento vivere.</p>
          <p></p>
          <button id="sidebar-toggle">Menu for mobile</button>
      </footer>`;
}

/* Do not edit anything below this line unless you know what you're doing. */
function giveActiveClassToCurrentPage() {
  const els = document.querySelectorAll("nav a");
  const currentPath = window.location.pathname;

  [...els].forEach((el) => {
    // Get the href attribute
    const href = el.getAttribute("href");

    // Check if the current page path ends with the link's target
    // We use .replace(nesting, "") to isolate the filename
    const targetFile = href.replace(nesting, "");

    if (currentPath.endsWith(targetFile)) {
      el.classList.add("active");

      // Keep your sub-navigation logic
      if (el.closest("details")) {
        el.closest("details").setAttribute("open", "open");
        el.closest("details").classList.add("active");
      }
      if (el.closest("ul") && el.closest("ul").closest("ul")) {
        el.closest("ul").closest("ul").classList.add("active");
      }
    }
  });
}

function getNesting() {
  const numberOfSlashes = window.location.pathname.split("/").length - 1;
  if (numberOfSlashes == 1) return "./";
  return "../".repeat(numberOfSlashes - 1);
}
