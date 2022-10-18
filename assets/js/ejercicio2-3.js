// //ejercicio 2.3
// let matrx = new Array(0);
// matrx.push([]);
// matrx[0] = [`*`,"*","*","*"];
// matrx.push([]);
// matrx[1] = ["*","*","*","*"];
// matrx.push([]);
// matrx[2] = ["*","*","*","*"];
// matrx.push([]);
// matrx[3] = ["*","*","*","*"];
// console.log(matrx);
// let asterisco = "****"
// for(let row = 0; row < asterisco.length; row++){
//     if(row < 5){
//     console.log(asterisco);
// }
// }
const asterisco = () => {
    let result = "";
    let rows = 4;
    let col = 4;
    for(let index = 0; index < rows; index++){
        for(let index = 0; index < col; index++){
            result += "*";
        }
        result += "\n";
    }
    console.log(result);
};
asterisco();