window.addEventListener('load',function(){

  //Traemos los generos más vistos del endpoint que nos provee la API.
  let proxy = 'https://cors-anywhere.herokuapp.com/';
  let api = 'https://api.deezer.com/genre';
  
  let urlDetalle = proxy + api;

  let generosSection = document.querySelector('.genresdisplay');

  fetch(urlDetalle)
    .then(function(respuesta){
      return respuesta.json()
    })
    .then(function(datos){
    console.log(datos);
    let generos = datos.data; 
    
    for (let i=1; i<=generos.length; i++){
    let unGenero = generos[i];
    let titulo = unGenero.name;
    let imagen = unGenero.picture_xl;
      let codigo = unGenero.id;
    generosSection.innerHTML += `
    <article class="divgeneros">
    <h2 class="tituloplaylist"><a class="decoration" href="detail-genres.html?id=${codigo}&name=${titulo}">${titulo}</a></h2>
    <img class="img" src="${imagen}" alt="${titulo}">
    </article>`;
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