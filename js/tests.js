/**
 * ejemplo test viedos plataforma
 * 
 var expect = chai.expect; // se agrega la función al programa

expect(“casa”).to.be.a('string'); //se espera que “casa” sea un string

expect([]).to.be.an(‘array’); //se espera que [] sea un arreglo

expect(miValor).to.equal(3); //equal compara que miValor sea igual a 3

expect({a: 1}).to.eql({a: 1}).but.not.equal({a: 1}); //eql compara cada valor del objeto. 
Para objetos usamos eql en vez de equal.
 * 
 */

var expect = chai.expect;
describe('Test - Reservar Horario de un Restaurant', function () {
        it('Cuando se reserva un horario disponible. El horario reservado se elimina del arreglo', function () {
                var restaurantTest = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 4, 5]);
                //valido que existe el horario que estoy por reservar antes de la reserva
                expect(restaurantTest.horarios.includes("13:00")).to.equal(true);
                //cantidad de elementos en el array de horarios antes de la reserva
                var cantidadHorariosAntesDeReservar = restaurantTest.horarios.length;
                restaurantTest.reservarHorario("13:00");
                expect(restaurantTest.horarios.length).to.equal(cantidadHorariosAntesDeReservar - 1);
                expect(restaurantTest.horarios.includes("13:00")).to.equal(false);
        })
        it('Cuando se reserva un horario que el restaurant no posee, el arreglo de horarios permanece sin modificaciones', function () {
                var restaurantTest = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 4, 5]);
                //cantidad de elementos en el array de horarios antes de la reserva
                var schedwlerQuantityBeforeReservation = restaurantTest.horarios.length;
                restaurantTest.reservarHorario();
                //array de horarios despues de la reserva
                var afterReservationSchedwlers = restaurantTest.horarios;
                expect(afterReservationSchedwlers.length).to.equal(schedwlerQuantityBeforeReservation);
                expect(restaurantTest.horarios.includes("12:30")).to.equal(false);
        })
        it('Cuando el horario a reservar es nulo, el arreglo de horarios permanece sin modificaciones', function () {
                var restaurantTest = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 4, 5]);
                //cantidad de elementos en el array de horarios antes de la reserva
                var schedwlerQuantityBeforeReservation = restaurantTest.horarios.length;
                restaurantTest.reservarHorario("");
                //array de horarios despues de la reserva
                var afterReservationSchedwlers = restaurantTest.horarios;
                expect(afterReservationSchedwlers.length).to.equal(schedwlerQuantityBeforeReservation);
        })
        it('Cuando el horario a reservar es undefined, el arreglo de horarios permanece sin modificaciones', function () {
                var restaurantTest = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 4, 5]);
                //cantidad de elementos en el array de horarios antes de la reserva
                var schedwlerQuantityBeforeReservation = restaurantTest.horarios.length;
                var horaReserva;
                console.log(horaReserva);
                restaurantTest.reservarHorario(horaReserva);
                //array de horarios despues de la reserva
                var afterReservationSchedwlers = restaurantTest.horarios;
                expect(afterReservationSchedwlers.length).to.equal(schedwlerQuantityBeforeReservation);
        })
})

describe('Test - Obtener la puntuación un restaurante', function () {
        it('La puntuacion es igual al promedio de las puntuaciones parciales', function () {
                var restaurantTest = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 4, 5]);
                var promedioPuntuacion = Math.round(6.2 * 10) / 10;
                var puntuacion = restaurantTest.obtenerPuntuacion();
                expect(puntuacion).to.equal(promedioPuntuacion);
        })
        it('Cuando el restaurant no tiene puntuaciones,la puntuacion es cero', function () {
                var restaurantTest = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", []);
                var promedioPuntuacion = Math.round(0) / 10;
                var puntuacion = restaurantTest.obtenerPuntuacion();
                expect(puntuacion).to.equal(promedioPuntuacion);
        })

})

describe('Test - calificar un Restaurant', function () {

        it('Cuano el valor ingresado es un Entero menor a 10 y mayor que cero,se guarda la puntuación', function () {
                var restaurantTest = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 4, 5]);
                var calificacion = 7;
                var cantidadCalificacionesInicial = restaurantTest.calificaciones.length;
                restaurantTest.calificar(calificacion);
                expect(restaurantTest.calificaciones.length).to.equal(cantidadCalificacionesInicial + 1);
                expect(restaurantTest.calificaciones.includes(7)).to.equal(true);
        })
        it('Cuano el valor ingresado no es un Entero, no se guarda la puntuación', function () {
                var restaurantTest = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 4, 5]);
                var calificacion = "uno";
                var cantidadCalificacionesInicial = restaurantTest.calificaciones.length;
                restaurantTest.calificar(calificacion);
                expect(restaurantTest.calificaciones.length).to.equal(cantidadCalificacionesInicial);
        })
        it('Cuando el valor ingresado es igual cero, no se guarda la puntuacion', function () {
                var restaurantTest = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 4, 5]);
                var calificacion = 0;
                var cantidadCalificacionesInicial = restaurantTest.calificaciones.length;
                restaurantTest.calificar(calificacion);
                expect(restaurantTest.calificaciones.length).to.equal(cantidadCalificacionesInicial);
                expect(restaurantTest.calificaciones.includes(0)).to.equal(false);
        })
        it('Cuando el valor ingresado es menor a cero, no se guarda la puntuacion', function () {
                var restaurantTest = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 4, 5]);
                var calificacion = -1;
                var cantidadCalificacionesInicial = restaurantTest.calificaciones.length;
                restaurantTest.calificar(calificacion);
                expect(restaurantTest.calificaciones.length).to.equal(cantidadCalificacionesInicial);
                expect(restaurantTest.calificaciones.includes(-1)).to.equal(false);
        })

        it('Cuando el valor ingresado es igual a diez, no se guarda la puntuacion', function () {
                var restaurantTest = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 4, 5]);
                var calificacion = 10;
                var cantidadCalificacionesInicial = restaurantTest.calificaciones.length;
                restaurantTest.calificar(calificacion);
                expect(restaurantTest.calificaciones.length).to.equal(cantidadCalificacionesInicial);
                expect(restaurantTest.calificaciones.includes(10)).to.equal(false);
        })
        it('Cuando el valor ingresado es mayor a diez, no se guarda la puntuacion', function () {
                var restaurantTest = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 4, 5]);
                var calificacion = 13;
                var cantidadCalificacionesInicial = restaurantTest.calificaciones.length;
                restaurantTest.calificar(calificacion);
                expect(restaurantTest.calificaciones.length).to.equal(cantidadCalificacionesInicial);
                expect(restaurantTest.calificaciones.includes(13)).to.equal(false);
        })

})

describe('Test - Buscar un Restaurant por Id', function () {
        it('Cuando el id ingresado existe, ', function () {
                var listadoRestaurantes = [
                        new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                        new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                        new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
                        new Restaurant(4, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [8, 9, 9, 4, 6, 7])
                ];
                var listado = new Listado(listadoRestaurantes)
                var idRestaurant = 1;
                var restaurant = listado.buscarRestaurante(idRestaurant);
                expect(restaurant.id).to.equal(1);
                expect(restaurant.id).to.equal(listado.restaurantes[0].id);
                expect(restaurant.nombre).to.equal(listado.restaurantes[0].nombre);
                expect(restaurant.rubro).to.equal(listado.restaurantes[0].rubro);
        })
        it('Cuando el id ingresado no existe,se muestra el mensaje:"No se ha encontrado ningún restaurant" ', function () {
                var listadoRestaurantes = [
                        new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                        new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                        new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
                        new Restaurant(4, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [8, 9, 9, 4, 6, 7])
                ];
                var listado = new Listado(listadoRestaurantes)
                var idRestaurant = 6;
                expect(listado.restaurantes.includes(idRestaurant)).to.equal(false);
                expect(listado.buscarRestaurante(idRestaurant)).to.equal("No se ha encontrado ningún restaurant");

        })
})

describe('Test - Obtener Restaurantes ', function () {
        it('Por rubro "Asiática",  y existe al menos un restaurante', function () {
                var listadoRestaurantes = [
                        new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                        new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                        new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
                        new Restaurant(4, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [8, 9, 9, 4, 6, 7])
                ];
                var listado = new Listado(listadoRestaurantes);
                var filtroCiudad=null;
                var filtroRubro = "Asiática";
                var filtroHorario=null;

                var restaurantesFiltrados=[new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7])];
               
                var restaurantes = listado.obtenerRestaurantes(filtroRubro,filtroCiudad,filtroHorario);
                expect(restaurantes.includes(1)).eql(restaurantesFiltrados.includes(1));
                expect(restaurantes.length).to.equal(restaurantesFiltrados.length);
                expect(restaurantes.length).to.equal(2);
        })
        it('Por rubro "Gourmet",  y No existen restaurantes', function () {
                var listadoRestaurantes = [
                        new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                        new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                        new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
                        new Restaurant(4, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [8, 9, 9, 4, 6, 7])
                ];
                var listado = new Listado(listadoRestaurantes);
                var filtroCiudad=null;
                var filtroRubro = "Gourmet";
                var filtroHorario=null;
                var restaurantesFiltrados=[];               
                var restaurantes = listado.obtenerRestaurantes(filtroRubro,filtroCiudad,filtroHorario);               
                expect(restaurantes.length).to.equal(restaurantesFiltrados.length);
                expect(restaurantes.length).to.equal(0);
        })
        it('Por ciudad "Nueva York",  y existe al menos un restaurante', function () {
                var listadoRestaurantes = [
                        new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                        new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                        new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
                        new Restaurant(4, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [8, 9, 9, 4, 6, 7])
                ];
                var listado = new Listado(listadoRestaurantes);
                var filtroCiudad="Nueva York";
                var filtroRubro = null;
                var filtroHorario=null;

                var restaurantesFiltrados=[new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                                        new Restaurant(4, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [8, 9, 9, 4, 6, 7])];
               
                var restaurantes = listado.obtenerRestaurantes(filtroRubro,filtroCiudad,filtroHorario);
                expect(restaurantes.includes(1)).eql(restaurantesFiltrados.includes(1));
                expect(restaurantes.includes(4)).eql(restaurantesFiltrados.includes(4));
                expect(restaurantes.includes( "TAO Uptown")).eql(restaurantesFiltrados.includes( "TAO Uptown"));
                expect(restaurantes.includes("Bleecker Street Pizza")).eql(restaurantesFiltrados.includes("Bleecker Street Pizza"));
                expect(restaurantes.length).to.equal(restaurantesFiltrados.length);
                expect(restaurantes.length).to.equal(2);

        })

        it('Por ciudad "Argentina",  y No existen restaurantes', function () {
                var listadoRestaurantes = [
                        new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                        new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                        new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
                        new Restaurant(4, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [8, 9, 9, 4, 6, 7])
                ];
                var listado = new Listado(listadoRestaurantes);
                var filtroCiudad="Argentina";
                var filtroRubro = null;
                var filtroHorario=null;
                var restaurantesFiltrados=[];               
                var restaurantes = listado.obtenerRestaurantes(filtroRubro,filtroCiudad,filtroHorario);               
                expect(restaurantes.length).to.equal(restaurantesFiltrados.length);
                expect(restaurantes.length).to.equal(0);
        })
        it('Por Horario "15:00",  y existe al menos un restaurant', function () {
                var listadoRestaurantes = [
                        new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                        new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                        new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
                        new Restaurant(4, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [8, 9, 9, 4, 6, 7])
                ];
                var listado = new Listado(listadoRestaurantes);
                var filtroCiudad=null;
                var filtroRubro = null;
                var filtroHorario="15:00";

                var restaurantesFiltrados=[
                        new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                new Restaurant(4, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [8, 9, 9, 4, 6, 7])];


                var restaurantes = listado.obtenerRestaurantes(filtroRubro,filtroCiudad,filtroHorario);
                expect(restaurantes.includes(2)).eql(restaurantesFiltrados.includes(2));
                expect(restaurantes.includes(4)).eql(restaurantesFiltrados.includes(4));
                expect(restaurantes.includes("Mandarín Kitchen")).eql(restaurantesFiltrados.includes("Mandarín Kitchen"));
                expect(restaurantes.includes("Bleecker Street Pizza")).eql(restaurantesFiltrados.includes("Bleecker Street Pizza"));
                expect(restaurantes.length).to.equal(restaurantesFiltrados.length);
        })

        it('Por Horario "20:30",  y No existen restaurantes', function () {
                var listadoRestaurantes = [
                        new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                        new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                        new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
                        new Restaurant(4, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [8, 9, 9, 4, 6, 7])
                ];
                var listado = new Listado(listadoRestaurantes);
                var filtroCiudad=null;
                var filtroRubro = null;
                var filtroHorario="20:30";
                var restaurantesFiltrados=[];               
                var restaurantes = listado.obtenerRestaurantes(filtroRubro,filtroCiudad,filtroHorario);               
                expect(restaurantes.length).to.equal(restaurantesFiltrados.length);
                expect(restaurantes.length).to.equal(0);
        })

        it('Por Horario, ciudad y rubro,  y existen restaurantes', function () {
                var listadoRestaurantes = [
                        new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                        new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                        new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
                        new Restaurant(4, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [8, 9, 9, 4, 6, 7])
                ];
                var listado = new Listado(listadoRestaurantes);
                var filtroCiudad="Berlín";
                var filtroRubro = "Hamburguesa";
                var filtroHorario="11:30";

                var restaurantesFiltrados=[new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9])];
               
                var restaurantes = listado.obtenerRestaurantes(filtroRubro,filtroCiudad,filtroHorario);
                expect(restaurantes.includes(3)).eql(restaurantesFiltrados.includes(3));
                expect(restaurantes.length).to.equal(restaurantesFiltrados.length);
        })

        it('Por Horario, ciudad y rubro,  y No existen restaurantes', function () {
                var listadoRestaurantes = [
                        new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                        new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                        new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
                        new Restaurant(4, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [8, 9, 9, 4, 6, 7])
                ];
                var listado = new Listado(listadoRestaurantes);
                var filtroCiudad="Salta";
                var filtroRubro = "Gourmet";
                var filtroHorario="13:00";
                var restaurantesFiltrados=[];               
                var restaurantes = listado.obtenerRestaurantes(filtroRubro,filtroCiudad,filtroHorario);               
                expect(restaurantes.length).to.equal(restaurantesFiltrados.length);
                expect(restaurantes.length).to.equal(0);
        })

        it('Con los filtros Horario, ciudad y rubro nulos, Se obtienen todos los restaurantes', function () {
                var listadoRestaurantes = [
                        new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                        new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                        new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
                        new Restaurant(4, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [8, 9, 9, 4, 6, 7])
                ];
                var listado = new Listado(listadoRestaurantes);
                var filtroCiudad=null;
                var filtroRubro = null;
                var filtroHorario=null;

                var restaurantesFiltrados=[
                        new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
                        new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                        new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
                        new Restaurant(4, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [8, 9, 9, 4, 6, 7])
                ];
               
                var restaurantes = listado.obtenerRestaurantes(filtroRubro,filtroCiudad,filtroHorario);
                //restaurant ids
                expect(restaurantes.includes(1)).eql(restaurantesFiltrados.includes(1));
                expect(restaurantes.includes(2)).eql(restaurantesFiltrados.includes(2));
                expect(restaurantes.includes(3)).eql(restaurantesFiltrados.includes(3));
                expect(restaurantes.includes(4)).eql(restaurantesFiltrados.includes(4));
                //restaurant names
                expect(restaurantes.includes("TAO Uptown")).eql(restaurantesFiltrados.includes("TAO Uptown"));
                expect(restaurantes.includes( "Mandarín Kitchen")).eql(restaurantesFiltrados.includes( "Mandarín Kitchen"));
                expect(restaurantes.includes("Burgermeister")).eql(restaurantesFiltrados.includes("Burgermeister"));
                expect(restaurantes.includes("Bleecker Street Pizza")).eql(restaurantesFiltrados.includes("Bleecker Street Pizza"));
                expect(restaurantes.length).to.equal(restaurantesFiltrados.length);
                expect(restaurantes.length).to.equal(4)
        })
})

