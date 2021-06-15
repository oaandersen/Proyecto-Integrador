window.addEventListener('load',function(){

// id del track
let searchResults = new URLSearchParams(this.location.search);
// let codigo = search_results.get('id');
console.log('id: ' + codigo);

// <article>
let articleTrack = this.document.querySelector('article.detailsongs');

// título del track
let tituloTrack = this.document.querySelector('h2');

// nombre original
let nombreArtist  = this.document.querySelector('article.detailsongs h3');

// img para el track
let elTrack = this.document.querySelector('article.detailsongs img');

let disco = document.querySelector('#disco');

let anadirPlaylist = document.querySelector('#playlist');
//Traemos los tracks más vistos del endpoint que nos provee la API.
let proxy = 'https://cors-anywhere.herokuapp.com/';
let api = 'https://api.deezer.com/track/';
let codigo = searchResults.get("id");
let urlDetalle = proxy + api + codigo ;

fetch(urlDetalle)
  .then(function(respuesta){
    return respuesta.json()
  })
  .then(function(datos){
    console.log(datos);
    let track = datos.data;
    let titulo = track.title;
    // título del track
    tituloTrack.innerText = `${titulo}`;
    // el track
    elTrack.src = Track.images.original.url;
    // nombre original
    nombreTrack.innerText = track.slug;

    // botón volver
    articleTrack.innerHTML += `
    <button onclick="javascript: history.go(-1)" title="volver">&larr; volver</button>
    `

  })
})