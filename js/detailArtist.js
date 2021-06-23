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
  let nombreArtista  = document.querySelector('h2#artist');
  
  // img del artista
  let elArtista = document.querySelector('.imagenArtist');
  
  // lista de 5 tracks del artista
  //let iframe = document.querySelector('iframe')
  let listaAlbum = document.querySelector('.ulIframe') 
  
 

  
  fetch(urlDetalle)
    .then(function(respuesta){
      return respuesta.json()
    })
    .then(function(datos){
      console.log(datos);
      let artista = datos;
      let title = artista.name;
      let img = artista.picture_xl;
      
      nombreArtista.innerText = title;

      elArtista.src = img;
      elArtista.alt = title;

      //iframe.src = `https://widget.deezer.com/widget/dark/artist/${codigo}/top_tracks`;
    })
    .catch(function(error){
      console.log(error);
    })


  let apiTop = `https://api.deezer.com/artist/${codigo}/albums?limit=5`;  
  fetch(proxy + apiTop)
    .then(function(respuesta){
      return respuesta.json()
    })
    .then(function(datos){
      console.log(datos);
      let albumes = datos.data;

      for (let i=0; i<=albumes.length; i++){
      let topAlbum = albumes[i].title;
      let idAlbum = albumes[i].id;
        listaAlbum.innerHTML += `
        <li><a class="decorationBlanco" href="detail-album.html?id=${idAlbum}">${topAlbum}</a></li>
        `
      }
    })
    .catch(function(error){
      console.log(error);
    })
  


     //BUSCADOR
    let buscador = document.querySelector('.buscador');
    let form = document.querySelector('.form-busq');
    let parrafo = document.querySelector('.mensaje');

    form.addEventListener('submit', function(e){
        e.preventDefault();
        if (buscador.value == ''){
            parrafo.innerText = 'El campo esta vacío';
        } else if (buscador.value.length<3){
            parrafo.innerText = 'Escribe al menos 3 caracteres';
        }else{
            this.submit();
        }
    });

    buscador.addEventListener('input', function(){
        parrafo.innerText = '';
    }); 
    
  })