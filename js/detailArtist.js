window.addEventListener('load',function(){

  // id del artista
  let searchResults = new URLSearchParams(location.search);

  //Traemos los artistas más vistos del endpoint que nos provee la API.
  let proxy = 'https://cors-anywhere.herokuapp.com/';
  let api = 'https://api.deezer.com/artist/';
  let codigo = searchResults.get('id');
  let urlDetalle = proxy + api + codigo ;
console.log(urlDetalle)
  // <article>
  let articleAlbum = document.querySelector('article:first-of-type');
   
  // nombre del artista
  let nombreGenero  = document.querySelector('h1');
  
  // img del artista
  let elArtista = document.querySelector('.imagenTrack');
  
  // lista de 5 albumes
  let nombreAlbum = document.querySelector('ul')
  
 

  
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
    
  })