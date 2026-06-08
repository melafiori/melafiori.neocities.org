document.addEventListener("DOMContentLoaded", function () {
  // Page has finished loading. Now, do things.
  loadLayoutByPetraPixel();

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
          <a href="https://www.instagram.com/melafiori/">
          <img src="${nesting}images/buttons/0199-instagramlogo.gif" alt="Instagram" target="_blank" style="max-width: 150px">
          </a>
          <a href="https://www.twitter.com/melafiori/">
          <img src="${nesting}images/buttons/0201-twitterlogo.gif" alt="Twitter" target="_blank" style="max-width: 150px">
          </a>
          
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Buttons and blinkies</div>
          <marquee>
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
          </marquee>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">He's just like me fr fr</div>
          <img class="full-width-image" src="${nesting}images/CATSCARF.jpg">
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
            <div>Memento mori, memento vivere <a href="${nesting}index.html">Go back</a> </div>
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
