// Metodos de propiedad - Arrays Metodhs

const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo canción con el ID: ${id}`)
    },
    pausa : function (){
        console.log(`Pausando...`)
    },
    crearPlaylist : function(nombre){
        console.log(`Playlist creada : ${nombre}`)
    },
    reproducirPlaylist : function(nombre){
        console.log(`Reproduciendo Playlist: ${nombre}`)
    }
}

reproductor.borrarCancion = function(id){
    console.log(`Canción eliminada con el ID: ${id}`)
}

reproductor.agregarCancion = function (nombre) {
    console.log(`Canción agredada: '${nombre}'`)
}

reproductor.reproducir(3500);
reproductor.pausa();
reproductor.crearPlaylist('DeTodo');
reproductor.reproducirPlaylist('DeTodo');
reproductor.borrarCancion(50);
reproductor.agregarCancion('Hello');
console.log(reproductor)