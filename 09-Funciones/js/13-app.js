const reproductor = {
    cancion:'',
    reproducir:(id) => {
        console.log(`se esta reproduciendo la cancion ${id}`)
    },
    pausar:() => {
        console.log(`pausando la cancion ...`);
    },
    borrar: (id) => {
        console.log(`Borrando cancion ${id}`);
    },
    crearPlaylist: nombre => {
        console.log(`Creando la Playlist de ${nombre}`)
    },
    reproducirPlaylist: nombre => {
        console.log(`Reproduciendo la playlist ${nombre}`)
    },

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }

}

reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.pausar(30);
reproductor.borrar(30);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');