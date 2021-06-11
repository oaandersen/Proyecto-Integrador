window.addEventListener('load',function(){

    fetch('https://api.deezer.com/track/3135556')
    .then(function(e){
        return e.json();
    })
    .then(function(data){
    console.log(data)
    })
    .catch(function(error){
        console.log('El error fue: ' + error)
    })

})