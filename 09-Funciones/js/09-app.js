const reproductor = {
    reproducir: function(id){
        console.log(`se esta reproduciendo la cancion ${id}`)
    },
    pausar: function(id){
        console.log(`pausando la cancion ${id}`);
    }
}

reproductor.reproducir(30);
reproductor.pausar(30);

reproductor.borrar = function(id){
    console.log(`Borrando cancion ${id}`);
}

reproductor.borrar(30);