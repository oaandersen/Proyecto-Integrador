window.addEventListener('load',function(){

    let sectionCanciones = document.querySelector('#tracks');
    let urlTracks = 'https://api.deezer.com/chart/0/tracks?limit=6';
    let proxy = 'https://cors-anywhere.herokuapp.com/'

    fetch(proxy + urlTracks)
    .then(function(respuesta){
        console.log(respuesta);
        return respuesta.json();
    })
    .then(function(datos){
        let tracks = datos.data; 

        for(let i=0; i<=tracks.length; i++){
            let unTrack = tracks[i];
            let imageTrack = unTrack.album.cover;
            let altTrack = unTrack.album.title;
            let tituloTrack = unTrack.title;
            let artistaTrack = unTrack.artist.name;
        
            sectionCanciones.innerHTML += `
            <articles class="structure">    
                <h3 class="titulos2">${tituloTrack}</h3>
                <img class="img" src="${imageTrack}" alt="${altTrack}">
                <h4 class="titulos2">${artistaTrack}</h4>
            </articles>
            `
        }
    })
    .catch(function (error) {
        // sectionCanciones.innerHTML += `
        // <p> El recurso no se encontró </p>
        // `;
        console.log(error);
    })








})