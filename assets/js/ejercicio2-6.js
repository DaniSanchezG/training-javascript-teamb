//ejercicio 2.6
let ejercicio6_lorem = prompt("Introduce frase:");
function palabras(){
let ejercicio6_lenght = ejercicio6_lorem.length;
let ejercicio6_numberLetters = ejercicio6_lorem.replace(/ /g, "");
let ejercicio6_noSpace = ejercicio6_lorem.split(" ");
let ejercicio6_count = new Set(ejercicio6_noSpace).size;
let ejercicio6_porcentaje = (ejercicio6_noSpace.length / ejercicio6_count)*100;
let corto = ejercicio6_noSpace.sort((a, b) => a.length > b.length ? 1 : -1); 
let ejercicio6_avg = Math.round(ejercicio6_numberLetters.length / ejercicio6_noSpace.length);
console.log("Length:", ejercicio6_lenght, "characthers");
console.log("Length without space:", ejercicio6_numberLetters.length, "CharacterWords:", ejercicio6_noSpace.length);
console.log("Unique Words:", ejercicio6_count);
console.log("Unique Words(%):", ejercicio6_porcentaje,"%");
console.log("Length of shortest word:",corto[0].length, "characthers");
console.log("Length of largest word:",corto[corto.length - 1].length, "characthers");
console.log("Avg. word length:",ejercicio6_avg);
}
palabras();