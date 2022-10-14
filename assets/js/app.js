// Escribe un programa que muestre las letras del palíndromo “no lemon, no melon
// ” en orden inverso.

let palindromo = "no lemon, no melon";
let copyPalindromo = [...palindromo];
copyPalindromo.reverse(copyPalindromo);
console.log(copyPalindromo);
let text = copyPalindromo.toString();
console.log(copyPalindromo.toString());

copyPalimdromo2 = copyPalindromo.toString()
for (let i = 0; i < copyPalindromo.length; i++) {
copyPalimdromo2 = copyPalimdromo2.replace(",", "");
}
console.log(copyPalimdromo2);
