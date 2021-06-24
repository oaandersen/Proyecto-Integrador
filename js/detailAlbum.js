window.addEventListener('load',function(){

// id del album
let searchResults = new URLSearchParams(location.search);

// <article>
let articleAlbum = document.querySelector('article:first-of-type');

// título del album
let tituloAlbum = document.querySelector('h2 a');

// nombre original
let nombreArtista  = document.querySelector('h3#artist');

// img para el album
let elAlbum = document.querySelector('.imagenAlbum');

// nombre del genero
let nombreGenero = document.querySelector('h4')

// fecha de estreno del album
let fechaEstreno = document.querySelector('p')

// temas del disco
 let nombreCancion = document.querySelector('.ulIframe');

 let iframe = document.querySelector('iframe')

//Traemos los albumes más vistos del endpoint que nos provee la API.
let proxy = 'https://cors-anywhere.herokuapp.com/';
let api = 'https://api.deezer.com/album/';
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
    let img = album.cover_xl;
    let artista = album.artist.name;
    let genero = album.genres.data[0].name; 
    let estreno = album.release_date;
    let idArtist = album.artist.id;
    let idGenero = album.genres.data[0].id;

    // título del album
    tituloAlbum.innerText = title;
    // el album
    elAlbum.src = img;
    elAlbum.alt = title;
    // nombre artista
    nombreArtista.innerHTML = `<a class="decorationTrack" href="detail-artist.html?id=${idArtist}">${artista}</a>`;
    // nombre del genero
    nombreGenero.innerHTML = `<a class="decorationTrack" href="detail-genres.html?id=${idGenero}&name=${genero}">${genero}</a>`;

    // fecha de estreno album
    fechaEstreno.innerHTML = `<p> Publicado el ${estreno}</p>`;
    // Temas del disco
  
 iframe.src = `https://widget.deezer.com/widget/dark/album/${codigo}`;

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
