const misActualizaciones = [
    { fecha: "17-11-2026", texto: "added the reviews page back!, now you can see what i think about some of my favorite albums, check it out!"},
    { fecha: "17-11-2026", texto: "added guestbook to the navbar, please make sure to leave something<3" },
    { fecha: "16-11-2026", texto: "added a new page called 'socials', where you can find all my social media links!" },
    { fecha: "15-11-2026", texto: "added a new page called 'about me', where you can learn more about me and my projects!" },
    { fecha: "10-11-2026", texto: "i just created this new version of the site!, basic layout is in place, just 3 links on the navbar, things are looking great!" }
];

function generarCajaUpdates() {
    let html = '<div class="sidebar-box caja-scroll">';
    html += '<h3>updates! 💌</h3>';
    
    misActualizaciones.forEach(update => {
        html += `
            <div class="update-item">
                <strong>${update.fecha}</strong><br>
                ${update.texto}
            </div>
        `;
    });
    
    html += '</div>';
    return html;
}