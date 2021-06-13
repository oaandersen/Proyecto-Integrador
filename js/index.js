window.addEventListener('load',function(){

    let ulCanciones = document.querySelector('.ulCanciones');

    fetch('https://cors-anywhere.herokuapp.com/corsdemo/https://api.deezer.com/chart/0/tracks?limit=4')
    .then(function(respuesta){
        console.log(respuesta);
        return respuesta.json();
    })
    .then(function(datos){
        let tracks = datos.data; 

        for(let i=0; i<=4; i++){
            let unTrack = tracks[i];
            let imageTrack = unTrack.album.cover;
            let altTrack = unTrack.album.title;
            let tituloTrack = unTrack.title;
            let artistaTrack = unTrack.artist.name;
        
            ulCanciones.innerHTML = `
            <li>
                <h3>${tituloTrack}</h3>
                <img src="${imageTrack}" alt="${altTrack}">
                <h4>${artistaTrack}</h4>
            </li>
            `
        }
    })
    .catch(function (error) {
        ulCanciones.innerHTML = `
        <li><p> El recurso no se encontró </p></li>
        `;
        console.log(error);
    })







})