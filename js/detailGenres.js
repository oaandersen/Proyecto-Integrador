window.addEventListener('load',function(){
// id del genero
let searchResults = new URLSearchParams(location.search);

// <article>
let articleGenero = document.querySelector('article:first-of-type');

// título del genero
let tituloGenero = document.querySelector('h1');

// nombre original
let nombreGenero  = document.querySelector('.nombreGenero');

let proxy = 'https://cors-anywhere.herokuapp.com/';
let codigo = searchResults.get('id');
let api = `https://api.deezer.com/genre/${codigo}/artists`;

let urlDetalle = proxy + api;

let generoNombre = searchResults.get('name');
tituloGenero.innerText = `${generoNombre}` 
fetch(urlDetalle)
  .then(function(respuesta){
    return respuesta.json()
  })
  .then(function(datos){
    let genero = datos.data;
    for(let i=0; i<genero.length; i++){
      let imagen = genero[i].picture_xl;
      let nombre = genero[i].name;
      let idArtist = genero[i].id;

      nombreGenero.innerHTML += `
      <article class="generoArticle">
      <h3><a class="decoration" href="detail-artist.html?id=${idArtist}">${nombre}</a> </h3>
      <img class="imagenGenero" src="${imagen}" alt="${nombre}">
      </article>
      `

    }

     


    console.log(datos);
    


  })
  .catch(function(error){
  console.log(error)
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