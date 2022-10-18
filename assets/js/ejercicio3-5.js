//Escribe un programa que genera matrículas aleatorias, sabiendo que: • Una matrícula válida debe estar compuesta por 4 números y 3 letras. • Los números pueden ir desde 0000 hasta 9999 • Las letras pueden ir desde BBB hasta ZZZ • No se permiten vocales • No se permiten las consonantes Ñ ni Q El número de matrículas aleatorias será a petición del usuario.

function matriculas(max){
    return Math.floor(Math.random()*max);
}
function letters(){
    let letras = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y", "Z"];
    var idvalor = "";
    let n = 3;
    for(var i=0;i<n;i++){
        idvalor+=letras[Math.floor(Math.random()*20)];
}
return idvalor;
}
console.log(matriculas(9999), letters());
