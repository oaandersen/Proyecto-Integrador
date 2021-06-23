window.addEventListener('load',function(){
    
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let api=  "https://api.deezer.com/track/";
    
    let recuperoStorage = localStorage.getItem('playlist');
    
    let playlist = JSON.parse(recuperoStorage);
    

    console.log(playlist);
    

    let listaTracks = document.querySelector(".medioplaylist");
    
    if( playlist.length == 0 ) {
        listaTracks.innerHTML += ` 
        <p class="parrafosPlist">Aún no hay canciones en tu playlist</p>`
    
    } else{ 
            for ( let i=0; i<playlist.length; i++ ) {
                encontrarTrack( playlist[i] );
            }
        
    }
    
function encontrarTrack(idTrack){
    
    let url = proxy + api + idTrack;

    
    fetch(url)
    .then(function(response){
     return response.json();
     
    })
    
    .then (function(tracks){
    console.log(tracks)
    let unTrack = tracks;
    let idUnTrack= unTrack.id;
    let nombreTrack = unTrack.title;
    let imagen = unTrack.album.cover;
    let artista = unTrack.artist.name;
    let idArtist = unTrack.artist.id;

    listaTracks.innerHTML += ` 
    <article class="articuloPlist">
    <img class="imgPlist" src="${imagen}">    
    <div>
    <h4 class="tracksPlaylist"> <a class="decoration" href="detail-track.html?id=${idUnTrack}">${nombreTrack} </a> </h4>
    <p><a class="decoration" href="detail-artist.html?id=${idArtist}"> by ${artista}</a></p>
    </div>
    </article>
    ` 
    
    })
    .catch(function(error){
        console.log(error)
    })
}

    //BUSCADOR
    let buscador = document.querySelector('.buscador');
    let form = document.querySelector('.form-busq');
    let parrafo = document.querySelector('.mensaje');

    form.addEventListener('submit', function(e){
        e.preventDefault();
        if (buscador.value == ''){
            parrafo.innerText = 'El campo esta vacío';
        } else if (buscador.value.length<3){
            parrafo.innerText = 'Escribe al menos 3 caracteres';
        }else{
            this.submit();
        }
    });

    buscador.addEventListener('input', function(){
        parrafo.innerText = '';
    });
})