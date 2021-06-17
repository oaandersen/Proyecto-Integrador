window.addEventListener('load',function(){

// id del track
let searchResults = new URLSearchParams(location.search);
// let codigo = search_results.get('id');

// <article>
let articleTrack = document.querySelector('article.detailsongs');

// título del track
let tituloTrack = document.querySelector('h1 a');

// nombre original
let nombreArtist  = document.querySelector('h3#artist');

// img para el track
let elTrack = this.document.querySelector('article.detailsongs div');

let discoTrack = document.querySelector('#disco');

let anadirPlaylist = document.querySelector('#playlist');

let widgetTrack = document.querySelector('#reproducirAudio');


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
    let disco = track.album.title;
    // título del track
    tituloTrack.innerText = `${titulo}`;
    // el track imagen
    elTrack.innerHTML = `<img class="img" src="${img}" alt="titulo">`;
    nombreArtist.innerHTML += `<a class="decorationTrack" href="">${artista}</a>`;
    discoTrack.innerHTML += `<a class="decoration" href="">${disco}</a>`;
    widgetTrack.innerHTML += `<iframe id="reproducirAudio" title="deezer-widget" src="https://widget.deezer.com/widget/auto/track/${codigo}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`
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
})


