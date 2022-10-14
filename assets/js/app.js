// 4. Ejercicio
// Escribe un programa con 7 variables con la temperatura de los 7 últimos días (Google). A
// continuación, muestra cuál ha sido la temperatura media.

let temperature = [22, 22.8, 23.7, 22.7, 21.6, 21.6, 22.3];
var suma = 0;

for (var x = 0; x < temperature.length; x++) {
  suma += temperature[x];
}
let promedio = suma / temperature.length;

console.log(promedio);
