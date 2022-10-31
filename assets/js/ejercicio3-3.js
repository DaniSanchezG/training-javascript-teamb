// -----------------Ejercicio 3.3
function coloresHexa() {
    var Numeros = 10;
    var numee = []
    while(numee.length < Numeros){
    const RandomNumber = size => [...Array(6)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
      var exists = false;
      for(var i=0;i<numee.length;i++){
        if(numee [i] == RandomNumber){
            exists = true;
            break;
        }
      }
      if(!exists){
        numee[numee.length] = RandomNumber();
      }
    }
    console.log("números aleatorios : " + numee);
    for( var k = 0; k < 10; k++ ){
    console.log(`%cHello World! Color ${k + 1}`, `color:#${numee[k]}`);
}
    }
    coloresHexa();