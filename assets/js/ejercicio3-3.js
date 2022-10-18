//ejercicio 3-3
var numee = new Array(10);
const ejercicio3_hexa = size => [...Array(6)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
numee[0] = ejercicio3_hexa(1);
numee[1] = ejercicio3_hexa(2);
numee[2] = ejercicio3_hexa(3);
numee[3] = ejercicio3_hexa(4);
numee[4] = ejercicio3_hexa(5);
numee[5] = ejercicio3_hexa(6);
numee[6] = ejercicio3_hexa(7);
numee[7] = ejercicio3_hexa(8);
numee[8] = ejercicio3_hexa(9);
numee[9] = ejercicio3_hexa(10);

console.log(numee);
let randomHex = numee[Math.floor(Math.random()*10)];
console.log('%cHello World', `color: #${randomHex}` );