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
describe('Test de funcion reservarHorario(horario): dado un horario (string) lo busca dentro del arreglo del horarios del restaurante y lo elimina. ', function(){
    it('Reservar un horario de entre varios ok', function(){
            var resultado = reservarHorario();
            expect(resultado).to.be.above(0);
    })
    it('Reservar el ultimo horario disponible ok', function(){
            var resultado = suma(-1,-3);
            expect(0).to.be.above(resultado);
    })
    
})