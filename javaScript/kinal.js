function mostrarSeccion(id) {
    var secciones = document.querySelectorAll('.seccion');
    secciones.forEach(function(seccion) {
        seccion.classList.remove('visible');
    });

    document.getElementById(id).classList.add('visible');
}