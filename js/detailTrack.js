window.addEventListener('load',function(){

// id del track
let searchResults = new URLSearchParams(location.search);
// let codigo = search_results.get('id');

// <article>
let articleTrack = document.querySelector('article.detailsongs');

// título del track
let tituloTrack = document.querySelector('h1 a');

// nombre original
let nombreArtist  = document.querySelector('h3#artistTrack');

// img para el track
let elTrack = document.querySelector('.imagenTrack');

let discoTrack = document.querySelector('#disco');

let anadirPlaylist = document.querySelector('#playlist');

let widgetTrack = document.querySelector('iframe.reproducirAudio');
console.log(widgetTrack);


let proxy = 'https://cors-anywhere.herokuapp.com/';
let api = 'https://api.deezer.com/track/';
let codigo = searchResults.get('id');
let urlDetalle = proxy + api + codigo ;

fetch(urlDetalle)
  .then(function(respuesta){
    console.log(respuesta);
    return respuesta.json()
  })
  .then(function(datos){
    let track = datos;
    let titulo = track.title;
    let img = track.album.cover_xl;
    let artista = track.artist.name;
    let idArtist = track.artist.id;
    let disco = track.album.title;
    let idDisco = track.album.id;
    // título del track
    tituloTrack.innerText = `${titulo}`;
    // el track imagen
    elTrack.src = img;
    elTrack.alt = titulo;
    nombreArtist.innerHTML += `<a class="decorationTrack" href="detail-artist.html?id=${idArtist}">${artista}</a>`;
    discoTrack.innerHTML += `<a class="decorationBlack" href="detail-album.html?id=${idDisco}">${disco}</a>`;
    widgetTrack.src = `https://widget.deezer.com/widget/auto/track/${codigo}`;

  })
  .catch(function(error){
    //tituloTrack.innerText += 'El recurso no se encontró'
    console.log(error);
  })

    //favoritos
    let playlist= []; 
    let recuperoStorage= localStorage.getItem("playlist")
    
    if (recuperoStorage != null){

      playlist= JSON.parse(recuperoStorage);
    }
    
    if(playlist.includes(codigo)){

      document.querySelector("#playlist").innerHTML = `Quitar de la playlist
      <i id="heartFull" class="fas fa-heart"></i>`
    }
    let agregarPlaylist= document.querySelector("#playlist");
    
    agregarPlaylist.addEventListener ("click", function (e){

      e.preventDefault();

      if(playlist.includes(codigo) ){

      let sacarTrack = playlist.indexOf(codigo)

      playlist.splice(sacarTrack, 1);

      document.querySelector("#playlist").innerHTML = `Agregar a la playlist
      <i id="heart" class="far fa-heart"></i>`

      console.log (playlist)
    
    } else{

      playlist.push(codigo);
      document.querySelector("#playlist").innerHTML = `
      Quitar de la playlist
      <i id="heartFull" class="fas fa-heart"></i>`;
    
    }
    let playlistStorage = JSON.stringify(playlist);

    localStorage.setItem("playlist", playlistStorage);

    console.log(localStorage)
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


