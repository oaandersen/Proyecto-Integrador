window.addEventListener('load',function(){
    
    let query = location.search;
    let queryObj = new URLSearchParams(query);
    let busqueda = queryObj.get('q');
    
    console.log(busqueda);
    
    let ulResultados = document.querySelector('.ulResultados');
    let tituloBusqueda = document.querySelector('.tituloBusqueda');

    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let apiBusqueda = `https://api.deezer.com/search?q=${busqueda}`;

    tituloBusqueda.innerText += `${busqueda}`;

    fetch(proxy + apiBusqueda)
        .then(function(respuesta){
            console.log(respuesta);
            return respuesta.json();
        })
        .then(function(datos){
            let results = datos.data
            for (let i=0; i<results.length; i++){
                let imagen = results[i].album.cover;
                let title = results[i].title;
                
                ulResultados.innerHTML += `
                <article>
                <h3>${title}</h3>
                <img src="${imagen}" alt="${title}">
                </article>
                `
            }        
        })
        .catch(function(error){
            console.log(error);
        })

})