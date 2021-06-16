window.addEventListener('load',function(){

// id del track
let searchResults = new URLSearchParams(location.search);
// let codigo = search_results.get('id');

// <article>
let articleTrack = document.querySelector('article.detailsongs');

// título del track
let tituloTrack = document.querySelector('h2 a');

// nombre original
let nombreArtist  = document.querySelector('h3#artist');

// img para el track
let elTrack = this.document.querySelector('article.detailsongs div');

let discoTrack = document.querySelector('#disco');

let anadirPlaylist = document.querySelector('#playlist');



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
    nombreArtist.innerHTML += `<a href="">${artista}</a>`;
    discoTrack.innerHTML += `<a href="">${disco}</a>`;
  })
  .catch(function(error){
    //tituloTrack.innerText += 'El recurso no se encontró'
    console.log(error);
  })



})