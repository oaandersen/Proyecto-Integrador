window.addEventListener('load',function(){
 // id del artista
 let search_results = new URLSearchParams(this.location.search);
 let codigo = search_results.get('id');
 console.log('id: ' + codigo);

 // <article>
 let articleArtist = this.document.querySelector('article:first-of-type');

 // título del artista
 let tituloArtist = this.document.querySelector('h2');

 // nombre original
 let nombreArtist  = this.document.querySelector('article:first-of-type p');

 // img para el artista
 let elArtist = this.document.querySelector('article img');

 //Traemos los artista más vistos del endpoint que nos provee la API.
 let urlDetalle = 'api'+ codigo + '31ed509033ef4341ae1d0faea931f415' ;

 fetch(urlDetalle)
   .then(function(respuesta){
     return respuesta.json()
   })
   .then(function(datos){
     console.log(datos);
     let Artist = datos.data;

     // título del artista
     tituloArtist.innerHTML = '<span>GIF: </span> ' + Artist.title;
     // el artista
     elArtist.src = Artist.images.original.url;
     // nombre original
     nombreArtist.innerText = Artist.slug;

     // botón volver
     articleArtist.innerHTML += `
     <button onclick="javascript: history.go(-1)" title="volver">&larr; volver</button>
     `

   })

})