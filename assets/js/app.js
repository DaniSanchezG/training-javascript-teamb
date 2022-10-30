/*const i = "BCDFGHJKLMNPQRSTVWXZ";
let letras = "";
let numeros = "0123456789"; 
let x = numeros + letras;
const generarmatriculaAleatorio = (i, length,) => {
    let matricula = "";
    for (let i = 0; i < length; i++) {
        let aleatorio = Math.floor(Math.random() * (i.length)) + min;
        matricula += i.charAt(aleatorio);
    }
    return Math.floor(Math.random() * (max - min)) + min;
};
console.log(matricula);*/
// const  generateRandomString = (num) => {
//     const characters ='0123456789';
//     let result1= ' ';
//     const charactersLength = characters.length;
//     for ( let i = 0; i < num; i++ ) {
//         result1 += characters.charAt(Math.floor(Math.random(4) * charactersLength));
//     }
  
//     return result1;
//   }
//   const  generateLetterString = (letter) => {
//     const characters ='BCDFGHJKLMNPQRSTVWXYZ';
//     let result1= ' ';
//     const charactersLength = characters.length;
//     for ( let i = 0; i < num; i++ ) {
//         result1 += characters.charAt(Math.floor(Math.random(3) * charactersLength));
//     }
  
//     return result1;
//   }
//   const displayRandomString = () =>{
//    let randomStringContainer = document.getElementById('random_string'); 
//     randomStringContainer.innerHTML =  generateRandomString(8);
//   }
  
//   console.log(generateRandomString(7));

const  generateRandomString = () => {
    const characters ='0123456789';
    let result1= ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < 4; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    return result1;
  }
  const  generateLetterString = () => {
    const characters ='BCDFGHJKLMNPQRSTVWXYZ';
    let result1= ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < 3; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    return result1;""
  }
  console.log(generateRandomString(), generateLetterString());