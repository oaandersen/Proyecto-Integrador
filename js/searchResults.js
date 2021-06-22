window.addEventListener('load',function(){
    
    let query = location.search;
    let queryObj = new URLSearchParams(query);
    let busqueda = queryObj.get('q');
    
    console.log(busqueda);
    
    
    let tituloBusqueda = document.querySelector('.tituloBusqueda');

    //ARTISTS
    let ulResultadosArtist = document.querySelector('.ulResultadosArtist');
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let apiBusqueda = `https://api.deezer.com/search/artist?q=${busqueda}`;
    let noResultados = document.querySelector(".noResultados")
    tituloBusqueda.innerText +=  `${busqueda}`;

    fetch(proxy + apiBusqueda)
        .then(function(respuesta){
            console.log(respuesta);
            return respuesta.json();
        })
        .then(function(datos){
            let results = datos.data
            console.log(results);
            for (let i=0; i<results.length; i++){
                let imagen = results[i].picture_medium;
                let title = results[i].name;
                

                ulResultadosArtist.innerHTML += `
                <article>
                <h3>  ${title} </h3>
                <img src="${imagen}" alt="${title}">
                </article>
                `
            }
          
            if (results.length===0){
            noResultados.style.display="block"
            }      
        })
        .catch(function(error){
            console.log(error);
            
        })

     //TRACKS
     let ulResultadosTracks = document.querySelector('.ulResultadosTracks');
    let apiBusqueda1 = `https://api.deezer.com/search/track?q=${busqueda}`;


    fetch(proxy + apiBusqueda1)
        .then(function(respuesta){
                console.log(respuesta);
                return respuesta.json();
            })
        .then(function(datos){
                let results = datos.data
                console.log(results);
                for (let i=0; i<results.length; i++){
                    let imagen = results[i].album.cover_medium;
                    let title = results[i].title;
                    
                    ulResultadosTracks.innerHTML += `
                    <article>
                    <h3>  ${title} </h3>
                    <img src="${imagen}" alt="${title}">
                    </article>
                    `
                } 
                if (results.length===0){
                    noResultados.style.display="block"
                    }       
            })
        .catch(function(error){
                console.log(error);
            })

    //ALBUM
    let ulResultadosAlbum = document.querySelector('.ulResultadosAlbum');
    let apiBusqueda2 = `https://api.deezer.com/search/album?q=${busqueda}`;

  

        fetch(proxy + apiBusqueda2)
            .then(function(respuesta){
                console.log(respuesta);
                return respuesta.json();
            })
            .then(function(datos){
                let results = datos.data
                console.log(results);
                for (let i=0; i<results.length; i++){
                    let imagen = results[i].cover_medium;
                    let title = results[i].title;
                    
                    ulResultadosAlbum.innerHTML += `
                    <article>
                    <h3>  ${title} </h3>
                    <img src="${imagen}" alt="${title}">
                    </article>
                    `
                }  
                if (results.length===0){
                    noResultados.style.display="block"
                    }      
            })
            .catch(function(error){
                console.log(error);
            })
})