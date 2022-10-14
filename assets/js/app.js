// ----------------------- 4. Ejercicio----------------------------------------------
//-----------------------------------------------------------------------------------
// // Escribe un programa con 7 variables con la temperatura de los 7 últimos días (Google). A
// // continuación, muestra cuál ha sido la temperatura media.

// let temperature = [22, 22.8, 23.7, 22.7, 21.6, 21.6, 22.3];
// var suma = 0;

// for (var x = 0; x < temperature.length; x++) {
//   suma += temperature[x];
// }
// let promedio = suma / temperature.length;

// console.log(promedio);

// //con una funcion

// function temperaturaMedia(temperaturas) {
//   var i = 0,
//     summ = 0,
//     ArrayLen = temperaturas.length;
//   while (i < ArrayLen) {
//     summ = summ + temperaturas[i++];
//   }
//   return summ / ArrayLen;
// }
// var temperaturas = [22, 22.8, 23.7, 22.7, 21.6, 21.6, 22.3];
// console.log(temperaturaMedia(temperaturas));

//-----------------7. Ejercicio--------------------------------------------
//Escribe un programa que genera 100 números aleatorios, entre 0 y 500, y
//los almacena en un array.
//A continuación filtra todos los números impares, ordenando los pares de mayor a menor
//------------------------------------------------------------------------------------
let numerosAleatorios = null;
let array = [0];
for (let i = 1; i <= 100; i++) {
  numerosAleatorios = Math.floor(Math.random() * 500);
    // array.push(numerosAleatorios);
  console.log(numerosAleatorios);

//   console.log(array);
}
// console.log(array)
