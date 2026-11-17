// Añade tus nuevas reseñas siempre al principio de esta lista
const misReviews = [
    {
        titulo: "tanquemante",
        artista: "Inundaremos",
        imagen: "./resources/images/albums/tanquemante.png",
        spotify: "https://open.spotify.com/album/4eHbFAQqWkCAOWKUr64pu3?si=N9uRRTw7QVi2GOlRHHdY2w",
        youtube: "https://music.youtube.com/playlist?list=OLAK5uy_nZYe1NkNBeTsuOM8-r0NUYkQSeNuVfKHQ&si=YSOLeW2R8lJutDDN&drli=1",
        texto: "I adore how melodic and colourful this album is with it's variety of instruments and lush vocals that really paint these wonderful settings well, i love the amount of instruments that the band put into their songs as it really helps them sound a lot more interesting than so many other bands that are around now and creates some really nice sounds throughout this album. I really love <i>Intromisión</i> and <i>Peor Versión</i>.",
        nota: "8/10",
        favorita: "Peor Versión"
        

    },
    {
        titulo: "A la distancia",
        artista: "Estoy Bien",
        imagen: "./resources/images/albums/aladistancia.png",
        spotify: "https://open.spotify.com/album/5xf0B7TnQzHjWqc6NJdZDM?si=l1OCSQ_gS8Sr_vkDROZF5Q",
        youtube: "https://music.youtube.com/playlist?list=OLAK5uy_n5wKM0Jw5516ZA6XGVFavHUvEVynfbAw4&si=3CGakEJFcLExzbXm&drli=1",
        texto: "I had the pleasure of hearing this album live, and holy shit it was a great experience, i really love the sound direction they took with this album, it's like i finally can hear music that i can recognize it's THEIR sound you know?, and not something similar to another bands, like with <i>Apoyo Emocional</i> tracks, that i often thought they were similar to something that <i>Tronic</i> would do, idrk, just gotta say that this album is a great listen, and i really recommend it to anyone that wants to hear some good music from the emo chilean scene.",
        nota: "8.5/10",
        favorita: "A pedazos"
    },
    {
        titulo: "Echaremos el cielo abajo a patadas",
        artista: "teodioteodio",
        imagen: "./resources/images/albums/echaremosabajoelcieloapatadas.jpg",
        spotify: "https://open.spotify.com/album/400CnhZYCHtOM14wzM6ICj?si=F5Sz9ssrTAStBj2MU32N0Q",
        youtube: "https://music.youtube.com/playlist?list=OLAK5uy_kF0xo6STwXNP8aXfwOMgla9w7JVvgUn-Q&si=TgriY0ImyBhsB5Lo&drli=1",
        texto: "Another one i got to hear in my travels through the chilean music scene. This one didn't get to me as much as <i>Deseo, Carne y Voluntad</i> did, but regardless, it has some freaking bangers in there, <i>Lejos de México</i> is the most popular track right now, and oh my god, i don't have a lot of words to describe it (and it's the same for the whole album) other than 'powerful', it's a pretty good listen.",
        nota: "7/10",
        favorita: "Amar"
    },
    {
        titulo: "A fever you can't sweat out",
        artista: "Panic! At The Disco",
        imagen: "./resources/images/albums/afeverpatd.png",
        spotify: "https://open.spotify.com/album/01hp4DvayKlnqUQrmk0vvz?si=2syv9-UnTzS1mnFiC4b37g",
        youtube: "https://music.youtube.com/playlist?list=OLAK5uy_kbHk513O77c43CsuhQ8E6RD8jwznREkiU&si=lwTjzzfpEkHwmfU5&drli=1",
        texto: "In my opinion (and in the opinion of many others) this is the best album p!atd has, but STILL, it's not a 10/10, it has some songs that are not that great, <i>Intermission</i> for example, can be annoying to listen at times, and <i>Build God, Then We'll Talk</i> is a another that i don't really like that much, but the rest of the album can be pretty great, <i>The only difference...</i>, <i>Camisado</i> and <i>Lying is the most fun...</i> are some of the best tracks in here, overall a pretty good listen and a pretty good singing experience, if i may add.",
        nota: "6.5/10",
        favorita:"The Only Difference Between Martyrdom and Suicide is Press Coverage"
    },
    {
        titulo: "Deseo, Carne y Voluntad",
        artista: "Candelabro",
        imagen: "./resources/images/albums/deseocarneyvoluntad.jpg",
        spotify: "https://open.spotify.com/album/4XqjkJmo5IHFQEOm8PsGut?si=u3WxlzLDTjO5lN3pazl-fQ",
        youtube: "https://music.youtube.com/playlist?list=OLAK5uy_m6YAUpjd2vlV2MxisO2uTeUn8pEjR37qU&si=kM2BtQC-QzuoaOoh&drli=1",
        texto: "This was recommended by a friend of mine, and I'm glad they did! I used to have a lot of prejuice against music from my own country and in my own mother language, but this album (and a few others i'll mention here) has given me a new perspective on how to listen to music, i already had music as a primary way to enjoy and listen to human experiences, emotions and stories that each one of us has inside, but hearing this, hearing <i>Fracaso</i>, <i>Pecado</i>, <i>Calíz</i> and some other tracks, left me speechless.",
        nota: "9/10",
        favorita: "Prisión de Carne"
    },
    {
        titulo: "Songs about Jane",
        artista: "Maroon 5",
        imagen: "./resources/images/albums/songsaboutjane.jpg",
        spotify: "https://open.spotify.com/album/1Rv9WRKyYhFaGbuYDaQunN?si=0JvtRcEBS7io18_D21GXLQ",
        youtube: "https://music.youtube.com/playlist?list=OLAK5uy_nAGSoXEtdvCEWC_8CDKKxyKhj4ZIoPPJ4&si=LSHW4yZcZxo5PDTU&drli=1",
        texto: "There's tragic in your first album being the peak of your musical career, this is one of those albums that doesn't really have bad songs, every one of them is a fuckin good listen, and it is a pretty good view to a 'what could have been' if they didn't sell their sound to something super comercial and bland.",
        nota: "8/10",
        favorita: "Sweetest Goodbye"
    },
    {
        titulo: "Vessel",
        artista: "twenty one pilots",
        imagen: "./resources/images/albums/VESSEL.jpg",
        spotify: "https://open.spotify.com/album/2r2r78NE05YjyHyVbVgqFn?si=XesajAdRQvu0_4MQsJ9GLA",
        youtube: "https://music.youtube.com/playlist?list=OLAK5uy_nDOgt3wUt8qMCR-KqAEJZ-SwqI4WtnG_o&si=jhjnWDEkiKzfwjky&drli=1",
        texto: "I really can't give an honest review on this album, after all it's my favourite album of my favourite band, twenty one pilots saved me more times than i'm proud of, i don't know if i'd be here if it wasn't for their music, this album is one of those experiences i'll never forget, never. Thank you twenty one pilots.",
        nota: "infinite/10",
        favorita: "Screen"
    },
    {
        titulo: "Funkybaritico Hedónico Fantástico",
        artista: "Chancho en Piedra",
        imagen: "./resources/images/albums/funkybaritico.webp",
        spotify: "https://open.spotify.com/album/3y6TrmfaqfW5lX5RdDNAEk?si=IwA9BZDmTOyDGd-6mLyNww",
        youtube: "https://music.youtube.com/playlist?list=OLAK5uy_kJ8WksgSg8Jjqm8qm9UCbY9UlQlFEURxY&si=1jZhkmEfzcogwUQb&drli=1",
        texto: "This one is actually not my favorite album of theirs, but i can't negate the infinite times i've sang some of the funky ass songs that are in here, <i>muh weno</i>",
        nota: "7/10",
        favorita: "Mi mejor momento"
    },
    {
        titulo: "Dynamite",
        artista: "Jamiroquai",
        imagen: "./resources/images/albums/dynamite.jpg",
        spotify: "https://open.spotify.com/album/0NDOtCzyOSoSXwENIWFvMW?si=ygwY6uECQf2G7bXoS6uDyw",
        youtube: "https://music.youtube.com/playlist?list=OLAK5uy_l3P4mB8gtGgRUYTC_4nO79dCjK_cCKoMs&si=TF3mq4GZuDfKbj5T&drli=1",
        texto: "If you all wanna talk about an album that has a fucking amazing introductory song, it's this one with <i>Feels just like it should</i>... this album is certainly a recommendation for anyone that wants to dance a little bit or just you know, have fun with it.",
        nota: "8/10",
        favorita: "Seven Days in Sunny June"
    },
];

document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-reviews");
    if (!contenedor) return;

    let htmlGenerado = "";
    
    misReviews.forEach(review => {
        htmlGenerado += `
            <h2>"${review.titulo}" by ${review.artista}</h2>
            <img src="${review.imagen}" style="max-width: 300px;">
            <p>Listen here: <a href="${review.spotify}" target="_blank">Spotify</a> - <a href="${review.youtube}" target="_blank">YouTube music</a></p>
            <p>${review.texto} ${review.nota}</p>
            <p>Favorite track: <i>${review.favorita}</i></p>
            <hr />
        `;
    });

    contenedor.innerHTML = htmlGenerado;
});