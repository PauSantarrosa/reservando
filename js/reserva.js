var Reserva = function (horario, cantidadPersonas, precioPorPersona, codigoDescuento) {
    this.horario = horario;
    this.cantidadPersonas = cantidadPersonas;
    this.precioPorPersona = precioPorPersona;
    this.codigoDescuento = codigoDescuento;
}

//El precio base de una reserva es igual a la cantidad de personas por el precio por persona.

Reserva.prototype.caluclarPrecioBase = function () {
    return this.precioPorPersona * this.cantidadPersonas;
}

//precio final = precio base + adicionales - descuentos
/* Los adicionales y los descuentos son los siguientes:
Descuentos:
Descuento por grupos grandes: 
si la cantidad de personas de la reserva está entre 4 y 6 personas, se agrega un 5% de descuento. 
Para grupos entre de 7 y 8 personas un 10% de descuento y 
para grupos de más de 8 personas un 15% de descuento.
Descuento por código: 
algunas reservas pueden tener un código de descuento asociado. 
Si no tienen ninguno, no se les otorga ningún descuento.
 Los códigos son:
DES15: obtiene un 15% de descuento.
DES200: obtiene $200 de descuento.
DES1: obtiene de descuento el valor equivalente al precio de una persona.

Adicionales:
Adicional por horario: 
las franjas horarias de 13 a 14 y de 20 a 21 horas son muy concurridas. 
Se agrega un adicional del 5% si la reserva fue hecha para un horario dentro de esos rangos.
Adicional por fin de semana: 
si la reserva fue realizada para alguno de los días del fin de semana (viernes, sábado o domingo) se le agrega un adicional del 10%.
 */

Reserva.prototype.calcularPrecioTotal = function () {
    var descuentos = this.calcularTotalDescuentos();
    var adicionales = this.calcularTotalAdicionales();
     var total = this.caluclarPrecioBase() + adicionales - descuentos;
     if (total < 0){
         return 0;
     }
         return total;
}

Reserva.prototype.calcularTotalDescuentos = function () {
    var porcentajeDeDcto = 0;
    var dineroAfavor = 0;
    if (this.cantidadPersonas >= 4 && this.cantidadPersonas <= 6) {
        porcentajeDeDcto += 5;
    } else if (this.cantidadPersonas == 7 || this.cantidadPersonas == 8) {
        porcentajeDeDcto += 10;
    } else if (this.cantidadPersonas > 8) {
        porcentajeDeDcto += 15;
    }
    if (this.codigoDescuento !== null) {
        switch (this.codigoDescuento) {
            case "DES15":
                porcentajeDeDcto += 15
                break;
            case "DES200":
                dineroAfavor = 200;
                break;
            case "DES1":
                dineroAfavor = this.precioPorPersona;
                break;
        }
    }
    var totalDescuento = this.calcularDescuentos(dineroAfavor, porcentajeDeDcto);
    return totalDescuento;
}

Reserva.prototype.calcularDescuentos = function (dctoDinero, porcentaje) {
    var descuento = 0;
    if (porcentaje > 0) {
        descuento = (this.caluclarPrecioBase() * porcentaje) / 100
    }
    if (dctoDinero > 0) {
        descuento += dctoDinero;
    }
    return descuento;
}

Reserva.prototype.calcularTotalAdicionales = function () {
    return (this.calcularAdicionales(this.horario) * this.caluclarPrecioBase()) / 100;
}

Reserva.prototype.calcularAdicionales = function (horario) {
    var adicional = 0;    
    if ((horario.getHours() >= 13 && horario.getHours() <= 14) || (horario.getHours() >= 20 && horario.getHours() <= 21)){
        adicional += 5;
    }
    if (horario.getDay() == 5 || horario.getDay() == 6 || horario.getDay() == 0) {
        adicional += 10;
    }
    return adicional;
}