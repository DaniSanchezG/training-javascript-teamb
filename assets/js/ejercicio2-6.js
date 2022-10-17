//ejercicio 2.6
let ejercicio6_lorem = "Lorem ipsum dolor sit amet";
console.log("Length:", ejercicio6_lorem.length, "characthers");
let ejercicio6_numberLetters = ejercicio6_lorem.replace(/ /g, "");
let ejercicio6_noSpace = ejercicio6_lorem.split(" ");
console.log("Length without space:", ejercicio6_numberLetters.length, "CharacterWords:", ejercicio6_noSpace.length);
let ejercicio6_count = new Set(ejercicio6_lorem.split(" ")).size;
console.log("Unique Words:" + ejercicio6_count);
let ejercicio3_porcentaje = (ejercicio6_noSpace.length / ejercicio6_count)*100;
console.log("Unique Words(%):", ejercicio3_porcentaje,"%");
let corto = ejercicio6_noSpace.sort((a, b) => a.length > b.length ? 1 : -1);
console.log("Length of shortest word:",corto[0].length, "characthers");
console.log("Length of largest word:",corto[4].length, "characthers");
let ejercicio3_avg = Math.round(ejercicio6_numberLetters.length / ejercicio6_noSpace.length);
console.log("Avg. word length:",ejercicio3_avg);