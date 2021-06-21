window.addEventListener('load',function(){

  // id del genero
  let searchResults = new URLSearchParams(location.search);

   
  //Traemos los generos más vistos del endpoint que nos provee la API.
  let proxy = 'https://cors-anywhere.herokuapp.com/';
  let api = 'https://api.deezer.com/genre/';
  let id = searchResults.get('id');
  let urlDetalle = proxy + api + id ;

  fetch(urlDetalle)
    .then(function(respuesta){
      return respuesta.json()
    })
    .then(function(datos){
    console.log(datos);
    let genero = datos; 
    let articleDetalle = document.querySelector('.divgeneros');
    let contenidoArtricleDetalle = '';
    let titulo = genero.name;
    let imagen = genero.picture_xl;

    contenidoArtricleDetalle += `<h2><a class="decoration" href="detail-genres.html">${titulo}</a></h2>
     <img class="img" src="${imagen}" alt="${titulo}">`;
     articleDetalle.innerHTML += contenidoArtricleDetalle;

    })
     .catch(function(error){
       console.log(error);
        })

})