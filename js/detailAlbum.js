window.addEventListener('load',function(){

// id del album
let searchResults = new URLSearchParams(this.location.search);

// <article>
let articleAlbum = this.document.querySelector('article:first-of-type');

// título del album
let tituloAlbum = this.document.querySelector('h2');

// nombre original
let nombreAlbum  = this.document.querySelector('article:first-of-type p');

// img para el album
let elAlbum = this.document.querySelector('article img');

//Traemos los albumes más vistos del endpoint que nos provee la API.
let proxy = 'https://cors-anywhere.herokuapp.com/';
let api = 'https://api.deezer.com/track/';
let codigo = searchResults.get('id');
let urlDetalle = proxy + api + codigo ;

fetch(urlDetalle)
  .then(function(respuesta){
    return respuesta.json()
  })
  .then(function(datos){
    console.log(datos);
    let album = datos;
    let title = album.title;

    // título del album
    tituloAlbum.innerText = title;
    // el album
    elAlbum.src = Album.images.original.url;
    // nombre original
    nombreAlbum.innerText = Album.slug;

    // botón volver
    articleAlbum.innerHTML += `
    <button onclick="javascript: history.go(-1)" title="volver">&larr; volver</button>
    `

  })
})