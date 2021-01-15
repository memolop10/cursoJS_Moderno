const reproductor = {
    reproducir: function(id){
        console.log(`se esta reproduciendo la cancion ${id}`)
    },
    pausar: function(id){
        console.log(`pausando la cancion ${id}`);
    },
    borrar: function(id){
        console.log(`Borrando cancion ${id}`);
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la Playlist de ${nombre}`)
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la playlist ${nombre}`)
    }

}

reproductor.reproducir(30);
reproductor.pausar(30);
reproductor.borrar(30);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');