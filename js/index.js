window.addEventListener('load',function(){

    // Canciones
    let sectionCanciones = document.querySelector('#tracks');
    let urlTracks = 'https://api.deezer.com/chart/0/tracks?limit=5';
    let proxy = 'https://cors-anywhere.herokuapp.com/'
    console.log(urlTracks)
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
            let idTrack = unTrack.id;
            let idArtist = unTrack.artist.id;

            sectionCanciones.innerHTML += `
            <articles class="structure">    
                <h3 class="titulos2"><a class="decoration" href="detail-track.html?id=${idTrack}">${tituloTrack}</a></h3>
                <img class="img" src="${imageTrack}" alt="${altTrack}">
                <h4 class="titulos2">by <a class="decoration" href="detail-artist.html?id=${idArtist}">${artistaTrack}</a></h4>
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



    // Álbumes
    let sectionAlbum = document.querySelector('#albumes');
    let urlAlbum = 'https://api.deezer.com/chart/0/albums?limit=5';
    
    
    fetch(proxy + urlAlbum)
    .then(function(respuesta){
        console.log(respuesta);
        return respuesta.json();
    })
    .then(function(datos){
        let albumes = datos.data; 

        for(let i=0; i<=albumes.length; i++){
            let unAlbum = albumes[i];
            let albumCover = unAlbum.cover;
            let altAlbum = unAlbum.title;
            let tituloAlbum = unAlbum.title;
            let artistaAlbum = unAlbum.artist.name;
            let idAlbum = unAlbum.id;
            let idArtist = unAlbum.artist.id;

            sectionAlbum.innerHTML += `
            <articles class="structure">    
                <h3 class="titulos2"><a class="decoration" href="detail-album.html?id=${idAlbum}">${tituloAlbum}</a></h3>
                <img class="img" src="${albumCover}" alt="${altAlbum}">
                <h4 class="titulos2">by <a class="decoration" href="detail-artist.html?id=${idArtist}">${artistaAlbum}</a></h4>
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


    // Cantantes
    let sectionCantantes = document.querySelector('#cantantes');
    let urlCantantes = 'https://api.deezer.com/chart/0/artists?limit=5';
    
    
    fetch(proxy + urlCantantes)
    .then(function(respuesta){
        console.log(respuesta);
        return respuesta.json();
    })
    .then(function(datos){
        let artistas = datos.data; 

        for(let i=0; i<=artistas.length; i++){
            let unArtist = artistas[i];
            let artistImg = unArtist.picture;
            let altArtist = unArtist.name;
            let nombreArtist = unArtist.name;
            let idArtist = unArtist.id;

            sectionCantantes.innerHTML += `
            <articles class="structure">    
                <h3 class="titulos2"><a class="decoration" href="detail-artist.html?id=${idArtist}">${nombreArtist}</a></h3>
                <img class="img" src="${artistImg}" alt="${altArtist}">
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


    //BUSCADOR
    let buscador = document.querySelector('.buscador');
    let form = document.querySelector('.form-busq');
    let parrafo = document.querySelector('.mensaje');

    form.addEventListener('submit', function(e){
        e.preventDefault();
        if (buscador.value == ''){
            parrafo.innerText = 'El campo esta vacío';
            parrafo.style.display = 'block';
        } else if (buscador.value.length<3){
            parrafo.innerText = 'Escribe al menos 3 caracteres';
            parrafo.style.display = 'block';
        }else{
            this.submit();
        }
    });

    buscador.addEventListener('input', function(){
        parrafo.innerText = '';
        parrafo.style.display='none';
    });

})