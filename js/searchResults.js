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
    let noResultadosAlbum = document.querySelector("ul.ulResultadosAlbum h3.noResultados");
    let noResultadosArtist = document.querySelector("ul.ulResultadosArtist h3.noResultados");
    let noResultadosTrack = document.querySelector("ul.ulResultadosTracks h3.noResultados");
    tituloBusqueda.innerText +=  ` "${busqueda}"`;

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
                let idArtista = results[i].id;
                

                ulResultadosArtist.innerHTML += `
                <article class="resultadosClass">
                <h3><a class="decoration" href="detail-artist.html?id=${idArtista}">${title}</a> </h3>
                <img src="${imagen}" alt="${title}">
                </article>
                `
            }
          
            if (results.length===0){
            noResultadosArtist.style.display="block"
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
                    let idTrack = results[i].id;

                    ulResultadosTracks.innerHTML += `
                    <article class="resultadosClass">
                    <h3><a class="decoration" href="detail-track.html?id=${idTrack}">${title}</a></h3>
                    <img src="${imagen}" alt="${title}">
                    </article>
                    `
                } 
                if (results.length===0){
                    noResultadosTrack.style.display="block";
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
                    let idAlbum = results[i].id;

                    ulResultadosAlbum.innerHTML += `
                    <article class="resultadosClass">
                    <h3><a class="decoration" href="detail-album.html?id=${idAlbum}">${title}</a></h3>
                    <img src="${imagen}" alt="${title}">
                    </article>
                    `
                }  
                if (results.length===0){
                    noResultadosAlbum.style.display="block"
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