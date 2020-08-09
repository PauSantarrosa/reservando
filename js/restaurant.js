var Restaurant = function (id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

Restaurant.prototype.reservarHorario = function (horarioReservado) {
    //refactoring paso 1 guia
    return this.horarios.filter(horario => !(horario === horarioReservado))
}

Restaurant.prototype.calificar = function (nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

Restaurant.prototype.obtenerPuntuacion = function () {
    if (this.calificaciones.length === 0) {
        return 0;
    } else {
        //refactoring paso 2 guia
        return this.promedio(this.calificaciones);
    }
}

//refactoring paso 2 guia
Restaurant.prototype.sumatoria = function (numeros) {
    var sumatoria = 0;
    for (var i = 0; i < numeros.length; i++) {
        sumatoria += numeros[i]
    }
    return sumatoria;
}

Restaurant.prototype.promedio = function (numeros) {
    var sumatoria = this.sumatoria(numeros);
    var promedio = sumatoria / this.calificaciones.length;
    return Math.round(promedio * 10) / 10;
}

