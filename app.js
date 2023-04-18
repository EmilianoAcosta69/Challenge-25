// En un juego de pelea recibimos un array (generarlo) con 10 golpes aleatorios que recibe un personaje, mostrar todos los valores. 
//Luego buscar cual es el golpe mas fuerte que se dio.

let golpes = [];
let hp = 100;

for(let i = 1; i <= 10; i++){
    let random = Math.round(Math.random() * 25);
    golpes.push(random);
    hp = hp - random;
    alert(`golpe recibido: ${random} vida actual: ${hp}` );
    if(hp <= 0){
        i = 10;
        console.log('Tu Personaje perdio la pelea.');
    }
}

golpeMasFuerte = Math.max.apply(null,golpes);
console.log(`El golpe mas fuerte recibido fue de: ${golpeMasFuerte}`);