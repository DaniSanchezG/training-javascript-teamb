const i = "0123456789BCDFGHJKLMNPQRSTVWXZ";
/*let letras = "";
let i = numeros + letras;*/
const generarmatriculaAleatorio = (i, length,) => {
    let matricula = "";
    for (let i = 0; i <length; i++) {
    let aleatorio = Math.floor(Math.random() * (i.length)) + min;
   matricula += i.charAt(aleatorio); 
}
 return Math.floor(Math.random()* (max -min)) + min;
};    
console.log(i);