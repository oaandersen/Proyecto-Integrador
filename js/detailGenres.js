window.addEventListener('load',function(){
// id del genero
let search_results = new URLSearchParams(this.location.search);
let codigo = search_results.get('id');
console.log('id: ' + codigo);

// <article>
let articleGenero = this.document.querySelector('article:first-of-type');

// título del genero
let tituloGenero = this.document.querySelector('h2');

// nombre original
let nombreGenero  = this.document.querySelector('article:first-of-type p');

// img para el genero
let elGenero = this.document.querySelector('article img');

//Traemos los generos más vistos del endpoint que nos provee la API.
let urlDetalle = 'api'+ codigo + '31ed509033ef4341ae1d0faea931f415' ;

fetch(urlDetalle)
  .then(function(respuesta){
    return respuesta.json()
  })
  .then(function(datos){
    console.log(datos);
    let Genero = datos.data;

    // título del genero
    tituloGenero.innerHTML = '<span>GIF: </span> ' + Genero.title;
    // el genero
    elGenero.src = Genero.images.original.url;
    // nombre original
    nombreGenero.innerText = Genero.slug;

    // botón volver
    articleGenero.innerHTML += `
    <button onclick="javascript: history.go(-1)" title="volver">&larr; volver</button>
    `

  })

})