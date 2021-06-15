window.addEventListener('load',function(){

// id del album
let search_results = new URLSearchParams(this.location.search);
let codigo = search_results.get('id');
console.log('id: ' + codigo);

// <article>
let articleAlbum = this.document.querySelector('article:first-of-type');

// título del album
let tituloAlbum = this.document.querySelector('h2');

// nombre original
let nombreAlbum  = this.document.querySelector('article:first-of-type p');

// img para el album
let elAlbum = this.document.querySelector('article img');

//Traemos los albumes más vistos del endpoint que nos provee la API.
let urlDetalle = 'api'+ codigo + '31ed509033ef4341ae1d0faea931f415' ;

fetch(urlDetalle)
  .then(function(respuesta){
    return respuesta.json()
  })
  .then(function(datos){
    console.log(datos);
    let Album = datos.data;

    // título del album
    tituloAlbum.innerHTML = '<span>GIF: </span> ' + Album.title;
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