window.addEventListener('load',function(){

  // id del artista
  let searchResults = new URLSearchParams(location.search);
  
  // <article>
  let articleAlbum = document.querySelector('article:first-of-type');
   
  // nombre del artista
  let nombreArtista  = document.querySelector('h2#artist');
  
  // img del artista
  let elArtista = document.querySelector('.imagenTrack');
  
  // lista de 5 albumes
  let nombreAlbum = document.querySelector('ul')
  
  //Traemos los albumes más vistos del endpoint que nos provee la API.
  let proxy = 'https://cors-anywhere.herokuapp.com/';
  let api = 'https://api.deezer.com/artist/';
  let codigo = searchResults.get('id');
  let urlDetalle = proxy + api + codigo ;
  
  fetch(urlDetalle)
    .then(function(respuesta){
      return respuesta.json()
    })
    .then(function(datos){
      console.log(datos);
      let artista = datos;
      let title = artista.title;
      let img = artista.picture_xl;
      let albumes = artista;
      

  
      // Nombre del artista

    })
      .catch(function(error){
        //tituloAlbum.innerText += 'El recurso no se encontró'
        console.log(error);
      })

      // botón volver
      articleAlbum.innerHTML += `
      <button onclick="javascript: history.go(-1)" title="volver">&larr; volver</button>
      `
  
    
  })