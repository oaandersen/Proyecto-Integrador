window.addEventListener('load',function(){

// id del track
let search_results = new URLSearchParams(this.location.search);
let codigo = search_results.get('id');
console.log('id: ' + codigo);

// <article>
let articleTrack = this.document.querySelector('article:first-of-type');

// título del track
let tituloTrack = this.document.querySelector('h2');

// nombre original
let nombreTrack  = this.document.querySelector('article:first-of-type p');

// img para el track
let elTrack = this.document.querySelector('article img');

//Traemos los tracks más vistos del endpoint que nos provee la API.
let urlDetalle = 'api'+ codigo + '31ed509033ef4341ae1d0faea931f415' ;

fetch(urlDetalle)
  .then(function(respuesta){
    return respuesta.json()
  })
  .then(function(datos){
    console.log(datos);
    let Track = datos.data;

    // título del track
    tituloTrack.innerHTML = '<span>GIF: </span> ' + Track.title;
    // el track
    elTrack.src = Track.images.original.url;
    // nombre original
    nombreTrack.innerText = Track.slug;

    // botón volver
    articleTrack.innerHTML += `
    <button onclick="javascript: history.go(-1)" title="volver">&larr; volver</button>
    `

  })
})