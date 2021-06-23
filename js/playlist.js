window.addEventListener('load',function(){
    
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let api=  "https://api.deezer.com/track/";
    
    let recuperoStorage = localStorage.getItem('playlist');
    
    let playlist = JSON.parse(recuperoStorage);
    

    console.log(playlist);
    

    let listaTracks = document.querySelector(".medioplaylist");
    
    if( playlist.length == 0 ) {
        listaTracks.innerHTML += ` 
        <p>Aun no hay canciones en tu playlist</p>`
    
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
    let untrack = tracks;
    let iduntrack= untrack.id;
    let nombretrack = untrack.title;
    listaTracks.innerHTML += ` 
    <article>
        <h3> <a class="decoration" href="detail-track.html?id=${iduntrack}">${nombretrack} </a> </h3>
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