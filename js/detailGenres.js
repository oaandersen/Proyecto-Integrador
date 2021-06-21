window.addEventListener('load',function(){
// id del genero
let search_results = new URLSearchParams(this.location.search);
let codigo = search_results.get('id');
console.log('id: ' + codigo);

// <article>
let articleGenero = document.querySelector('article:first-of-type');

// título del genero
let tituloGenero = document.querySelector('h2');

// nombre original
let nombreGenero  = document.querySelector('article:first-of-type p');

// img para el genero
let elGenero = this.document.querySelector('article img');

let proxy = 'https://cors-anywhere.herokuapp.com/';
let api = 'https://api.deezer.com/genre/';
let id = searchResults.get('id');
let urlDetalle = proxy + api + id ;

fetch(urlDetalle)
  .then(function(respuesta){
    return respuesta.json()
  })
  .then(function(datos){
    let Genero = datos;
    let articleDetalle = document.querySelector('.genresvariados'); 
    for(let i=0; i<3;i ++){

    }

    console.log(datos);
    


  })

})