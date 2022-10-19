//ALGOROTHMS2 EJERCICIO 2.

// PRIMERA FORMA.

// let palindromo = "no lemon, no melon";
// let copyPalindromo = ["no", "lemon", "no", "melon"];
// copyPalindromo.reverse();
// copyPalindromo.toString();
// console.log(copyPalindromo.toString());

// SEGUNDA FORMA.

// let palindromo = "no lemon, no melon";
// let copyPalindromo = [...palindromo];
// console.log(copyPalindromo);
// let text = copyPalindromo.toString();
// console.log(copyPalindromo.toString());

// copyPalimdromo2 = copyPalindromo.toString()
// for (let i = 0; i < copyPalindromo.length; i++) {
// copyPalimdromo2 = copyPalimdromo2.replace(",", "");
// }
// console.log(copyPalimdromo2);

//ALGORITHMS2 EJERCICIO 7.

// let min = 0;
// let max = 10;
// let numberRandom = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(numberRandom);
// let guessNumber;
// let centinela = false;
// let tries = 3;

// while (!centinela && tries >= 1) {
//   if (tries == 3) {
//     guessNumber = parseInt(prompt(`Insert a number, tries ${tries}`));
//   } else {
//     guessNumber = parseInt(
//       prompt(`try again, you have ${tries} tries`)
//     );
//   }

//   if (numberRandom == guessNumber) {
//     centinela = true;
//   }
//   tries--;
// }
// if (centinela) {
//   console.log("You win!");
// } else {
//   console.log("Sorry, Good luck in love!");
// }
