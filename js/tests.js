/**
 * ejemplo test viedos plataforma
 * 
 var expect = chai.expect; // se agrega la función al programa

expect(“casa”).to.be.a('string'); //se espera que “casa” sea un string

expect([]).to.be.an(‘array’); //se espera que [] sea un arreglo

expect(miValor).to.equal(3); //equal compara que miValor sea igual a 3

expect({a: 1}).to.equal({a: 1}).but.not.equal({a: 1}); //equal compara cada valor del objeto. 
Para objetos usamos equal en vez de equal.
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
                var horariosDespuesDeReservar = restaurantTest.reservarHorario("13:00");
                expect(horariosDespuesDeReservar.length).to.equal(cantidadHorariosAntesDeReservar - 1);
                expect(horariosDespuesDeReservar.includes("13:00")).to.equal(false);
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
                expect(restaurantes.includes(1)).equal(restaurantesFiltrados.includes(1));
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
                expect(restaurantes.includes(1)).equal(restaurantesFiltrados.includes(1));
                expect(restaurantes.includes(4)).equal(restaurantesFiltrados.includes(4));
                expect(restaurantes.includes( "TAO Uptown")).equal(restaurantesFiltrados.includes( "TAO Uptown"));
                expect(restaurantes.includes("Bleecker Street Pizza")).equal(restaurantesFiltrados.includes("Bleecker Street Pizza"));
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
                expect(restaurantes.includes(2)).equal(restaurantesFiltrados.includes(2));
                expect(restaurantes.includes(4)).equal(restaurantesFiltrados.includes(4));
                expect(restaurantes.includes("Mandarín Kitchen")).equal(restaurantesFiltrados.includes("Mandarín Kitchen"));
                expect(restaurantes.includes("Bleecker Street Pizza")).equal(restaurantesFiltrados.includes("Bleecker Street Pizza"));
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
                expect(restaurantes.includes(3)).equal(restaurantesFiltrados.includes(3));
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
                expect(restaurantes.includes(1)).equal(restaurantesFiltrados.includes(1));
                expect(restaurantes.includes(2)).equal(restaurantesFiltrados.includes(2));
                expect(restaurantes.includes(3)).equal(restaurantesFiltrados.includes(3));
                expect(restaurantes.includes(4)).equal(restaurantesFiltrados.includes(4));
                //restaurant names
                expect(restaurantes.includes("TAO Uptown")).equal(restaurantesFiltrados.includes("TAO Uptown"));
                expect(restaurantes.includes( "Mandarín Kitchen")).equal(restaurantesFiltrados.includes( "Mandarín Kitchen"));
                expect(restaurantes.includes("Burgermeister")).equal(restaurantesFiltrados.includes("Burgermeister"));
                expect(restaurantes.includes("Bleecker Street Pizza")).equal(restaurantesFiltrados.includes("Bleecker Street Pizza"));
                expect(restaurantes.length).to.equal(restaurantesFiltrados.length);
                expect(restaurantes.length).to.equal(4)
        })
})

describe('Test - Realizar Reserva ', function () {
        //testCalcularPrecioBase
        it('calcular precio base de una Reserva con precioPorPersona mayor a 0', function () {
                var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");               
                var precioBase = reserva1.caluclarPrecioBase();
                expect(precioBase).equal(reserva1.precioPorPersona * reserva1.cantidadPersonas);
                expect(precioBase > 0).to.be.true;
        })
        it('calcular precio base de una Reserva con precioPorPersona igual a 0', function () {
                var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 0, "DES1");               
                var precioBase = reserva1.caluclarPrecioBase();
                expect(precioBase).equal(reserva1.precioPorPersona * reserva1.cantidadPersonas);
                expect(precioBase == 0).to.be.true;
        })
        it('calcular precio base de una Reserva con cantidad de personas igual a 0', function () {
                var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 0, 350, "DES1");               
                var precioBase = reserva1.caluclarPrecioBase();
                expect(precioBase).equal(reserva1.precioPorPersona * reserva1.cantidadPersonas);
                expect(precioBase == 0).to.be.true;
        })

        //testCalcularDescuento
        it('calcular descuento para reserva con %dcto igual a 0 y dineroAFavor mayor 0', function () {
                var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 2, 350, "DES1");               
                var descuento = reserva1.calcularDescuentos(reserva1.precioPorPersona,0);
                expect(descuento).equal(reserva1.precioPorPersona);
                expect(descuento > 0).to.be.true;
        })
        it('calcular descuento para reserva con %dcto mayor a 0 y dineroAFavor mayor 0', function () {
                var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 2, 350, "DES1");               
                var descuento = reserva1.calcularDescuentos(reserva1.precioPorPersona , 15);
                var precioBase = reserva1.caluclarPrecioBase();
                var porcentajeDctoEnDinero=precioBase *15/100;
                expect(descuento).equal(porcentajeDctoEnDinero + reserva1.precioPorPersona);
                expect(descuento).equal(455);
                expect(descuento > 0).to.be.true;
        })
        it('calcular descuento para reserva con %dcto mayor a 0 y dineroAFavor igual a 0', function () {
                var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 2, 350, "DES1");               
                var descuento = reserva1.calcularDescuentos(0,15);
                var precioBase = reserva1.caluclarPrecioBase();
                var porcentajeDctoEnDinero=precioBase *15/100;
                expect(descuento).equal(porcentajeDctoEnDinero);
                expect(descuento).equal(105);
                expect(descuento > 0).to.be.true;
        })
        it('calcular descuento para reserva con %dcto igual a 0 y dineroAFavor igual a 0', function () {
                var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 2, 350, "DES1");               
                var descuento = reserva1.calcularDescuentos(0,0);
                expect(descuento).equal(0);
        })

        //testCalcularTotalDescuento
        it('calcular descuento Total para una reserva que tieneun numero de personas igual a 3', function () {
                var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 3, 350);
                var descuento = reserva1.calcularTotalDescuentos();
                expect(descuento ==0).to.be.true;
        })
        it('calcular descuento Total para una reserva que tieneun numero de personas entre 4 y 6', function () {
                var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 5,350);
                var porcentajeDctoEnDinero = reserva1.caluclarPrecioBase()*5/100;              
                var descuentoTotal = reserva1.calcularTotalDescuentos();
                expect(descuentoTotal).equal(porcentajeDctoEnDinero);
                expect(descuentoTotal==87.50).to.be.true
        })
        it('calcular descuento Total para una reserva que tieneun numero de personas entre 7 y 8', function () {
                var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 7, 350);               
                var porcentajeDctoEnDinero = reserva1.caluclarPrecioBase()*10/100;              
                var descuentoTotal = reserva1.calcularTotalDescuentos();
                expect(descuentoTotal).equal(porcentajeDctoEnDinero);
                expect(descuentoTotal==245).to.be.true
        })
        it('calcular descuentos Total para una reserva que tieneun numero de personas mayor a 8', function () {
                var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 10, 350,);  
                var porcentajeDctoEnDinero = reserva1.caluclarPrecioBase()*15/100;              
                var descuentoTotal = reserva1.calcularTotalDescuentos();
                expect(descuentoTotal).equal(porcentajeDctoEnDinero);
                expect(descuentoTotal==525).to.be.true
        })

        it('calcular descuento Total para reserva con descuento por codigo DES1 y numero de Personas igual a 3', function () {
                var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 3, 350, "DES1");                           
                var descuentoTotal = reserva1.calcularTotalDescuentos();
                expect(descuentoTotal).equal(reserva1.precioPorPersona);
                expect(descuentoTotal==350).to.be.true
        })
        it('calcular descuento Total para reserva con descuento por codigo DES200 y numero de Personas igual a 5', function () {
                var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 5, 350, "DES200");               
                var porcentajeDctoEnDinero = reserva1.caluclarPrecioBase()*5/100;              
                var descuentoTotal = reserva1.calcularTotalDescuentos();
                expect(porcentajeDctoEnDinero==87.5).to.be.true
                expect(descuentoTotal).equal(porcentajeDctoEnDinero + 200);
                expect(descuentoTotal==287.5).to.be.true
        })
        it('calcular descuento Total para reserva con descuento por codigo DES15 y numero de Personas igual a 6', function () {
                var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 6, 350, "DES15");               
                var porcentajeDctoEnDinero = reserva1.caluclarPrecioBase()*20/100;              
                var descuentoTotal = reserva1.calcularTotalDescuentos();
                expect(descuentoTotal).equal(porcentajeDctoEnDinero);
                expect(descuentoTotal==420).to.be.true
        })
        it('calcular descuento Total para reserva con descuento por codigo DES15 y numero de Personas igual a 2', function () {
                var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 2, 350, "DES15");                           
                var porcentajeDctoEnDinero = reserva1.caluclarPrecioBase()*15/100;              
                var descuentoTotal = reserva1.calcularTotalDescuentos();
                expect(descuentoTotal).equal(porcentajeDctoEnDinero);
                expect(descuentoTotal==105).to.be.true
        })
        //testCalcularAdicionales
        it('calcular adicional para reserva con horario igual a 13hs', function () {
                var reserva1 = new Reserva (new Date(2020, 8, 24, 13, 00), 2, 350, "DES15"); 
                var fecha = new Date(2020, 8, 24, 13, 00) ;                                    
                var porcentajeAdicional = reserva1.calcularAdicionales(reserva1.horario);
                expect(porcentajeAdicional).equal(5);
                expect(reserva1.horario.getHours()).equal(13);
        })
        it('calcular adicional para reserva con horario igual a 11hs', function () {
                var reserva1 = new Reserva (new Date(2020, 8, 24, 11, 00), 2, 350, "DES15"); 
                var fecha = new Date(2020, 8, 24, 11, 00) ;                                    
                var porcentajeAdicional = reserva1.calcularAdicionales(reserva1.horario);
                expect(porcentajeAdicional).equal(0);
                expect(reserva1.horario.getHours()).equal(11);
        })
        it('calcular adicional para reserva con horario igual a 21hs', function () {
                var reserva1 = new Reserva (new Date(2020, 8, 24,21, 00), 2, 350, "DES15");                                 
                var porcentajeAdicional = reserva1.calcularAdicionales(reserva1.horario);
                expect(porcentajeAdicional).equal(5);
                expect(reserva1.horario.getHours()).equal(21);
        })
        it('calcular adicional para reserva con horario igual a 23hs', function () {
                var reserva1 = new Reserva (new Date(2020, 7, 24, 23, 00), 2, 350, "DES15");                                   
                var porcentajeAdicional = reserva1.calcularAdicionales(reserva1.horario);
                expect(porcentajeAdicional).equal(0);
                expect(reserva1.horario.getHours()).equal(23);
        })
        it('calcular adicional para reserva con dia igual domingo', function () {
                var reserva1 = new Reserva (new Date(2020, 7, 16, 23, 00), 2, 350, "DES15");                                  
                var porcentajeAdicional = reserva1.calcularAdicionales(reserva1.horario);
                expect(porcentajeAdicional).equal(10);
                expect(reserva1.horario.getDay()).equal(0);
        })
        it('calcular adicional para reserva con dia igual sabado', function () {
                var reserva1 = new Reserva (new Date(2020, 7, 15, 15, 00), 2, 350, "DES15");                                   
                var porcentajeAdicional = reserva1.calcularAdicionales(reserva1.horario);
                expect(porcentajeAdicional).equal(10);
                expect(reserva1.horario.getDay()).equal(6);
        })
        it('calcular adicional para reserva con dia igual viernes', function () {
                var reserva1 = new Reserva (new Date(2020, 7, 14, 23, 00), 2, 350, "DES15");                                    
                var porcentajeAdicional = reserva1.calcularAdicionales(reserva1.horario);
                expect(porcentajeAdicional).equal(10);
                expect(reserva1.horario.getDay()).equal(5);
        })
        it('calcular adicional para reserva con dia igual Jueves', function () {
                var reserva1 = new Reserva (new Date(2020, 7, 13, 23, 00), 2, 350, "DES15");                                  
                var porcentajeAdicional = reserva1.calcularAdicionales(reserva1.horario);
                expect(porcentajeAdicional).equal(0);
                expect(reserva1.horario.getDay()).equal(4);
        })
        it('calcular adicional para reserva con dia igual domingo y horario igual a 13', function () {                                 
                var reserva1 = new Reserva (new Date(2020, 7, 16, 13, 00), 2, 350, "DES15");                                  
                var porcentajeAdicional = reserva1.calcularAdicionales(reserva1.horario);
                expect(porcentajeAdicional).equal(15);
                expect(reserva1.horario.getDay()).equal(0);
        })
        //calcularTotalAdicionales
        it('calcular Total adicional para reserva con dia igual domingo y horario igual a 13', function () {                                 
                var reserva1 = new Reserva (new Date(2020, 7, 16, 13, 00), 2, 350, "DES15");                                  
                var porcentajeAdicional = reserva1.calcularAdicionales(reserva1.horario);
                expect(porcentajeAdicional).equal(15);
                expect(reserva1.horario.getDay()).equal(0);
                var totalAdicionalEnDinero = reserva1.calcularTotalAdicionales();
                expect(totalAdicionalEnDinero).equal(105);
        })
        it('calcular Total adicional para reserva con dia igual jueves y horario igual a 11', function () {                                 
                var reserva1 = new Reserva (new Date(2020, 7, 13, 11, 00), 2, 350, "DES15");                                   
                var porcentajeAdicional = reserva1.calcularAdicionales(reserva1.horario);
                expect(porcentajeAdicional).equal(0);
                expect(reserva1.horario.getDay()).equal(4);
                var totalAdicionalEnDinero = reserva1.calcularTotalAdicionales();
                expect(totalAdicionalEnDinero).equal(0);
        })
        //TestCaluclarPrecioTotal
        it('calcular Precio Final para una reserva que tieneun numero de personas igual a 3', function () {
                var reserva1 = new Reserva (new Date(2020, 7, 24, 11, 00), 3, 350);
                var totalAPagar = reserva1.calcularPrecioTotal();
                expect(totalAPagar).equal(reserva1.caluclarPrecioBase());
                expect(totalAPagar).equal(1050);
                expect(totalAPagar > 0).to.be.true;

        })
        it('calcular Precio Final para una reserva que tieneun numero de personas igual a 5', function () {
                var reserva1 = new Reserva (new Date(2020, 7, 24, 11, 00), 3, 350);
                var totalAPagar = reserva1.calcularPrecioTotal();
                expect(totalAPagar).equal(reserva1.caluclarPrecioBase());
                expect(totalAPagar).equal(1050);
                expect(totalAPagar > 0).to.be.true;

        })
        it('calcular Precio Final para reserva con descuento por codigo DES200 y numero de Personas igual a 8', function () {
                var reserva1 = new Reserva (new Date(2020, 7, 24, 11, 00), 8, 350, "DES200");                             
                var descuentoTotal = reserva1.calcularTotalDescuentos();
                expect(descuentoTotal==480).to.be.true
                var totalAPagar = reserva1.calcularPrecioTotal();
                expect(totalAPagar).equal(2320);
                expect(totalAPagar > 0).to.be.true;


        })
        it('calcular precio Final para reserva con descuento por codigo DES15 y numero de Personas igual a 6', function () {
                var reserva1 = new Reserva (new Date(2020, 7, 24, 11, 00), 6, 350, "DES15");            
                var descuentoTotal = reserva1.calcularTotalDescuentos();
                expect(descuentoTotal).equal(420);
                expect(descuentoTotal>0).to.be.true
                var totalAPagar = reserva1.calcularPrecioTotal();
                expect(totalAPagar).equal(1680);
                expect(totalAPagar > 0).to.be.true;
        })
        it('calcular precio Final para reserva con adicionales por dia igual domingo y horario igual a 13', function () {                                 
                var reserva1 = new Reserva (new Date(2020, 7, 16, 13, 00), 2, 350);                                  
                expect(reserva1.horario.getDay()).equal(0);
                var totalAdicionalEnDinero = reserva1.calcularTotalAdicionales();
                expect(totalAdicionalEnDinero).equal(105);
                var totalAPagar = reserva1.calcularPrecioTotal();
                expect(totalAPagar).equal(805);
                expect(totalAPagar > 0).to.be.true;
        })
        it('calcular precio Final para reserva con adicionales por dia igual domingo y horario igual a 13 con codigo de Descuento DES15', function () {                                 
                var reserva1 = new Reserva (new Date(2020, 7, 16, 13, 00), 2, 350, "DES15");                                  
                expect(reserva1.horario.getDay()).equal(0);
                var totalAdicionalEnDinero = reserva1.calcularTotalAdicionales();
                expect(totalAdicionalEnDinero).equal(105);
                var totalAPagar = reserva1.calcularPrecioTotal();
                expect(totalAPagar).equal(700);
                expect(totalAPagar > 0).to.be.true;
        })

})