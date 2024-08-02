alert('Bienvenidos al juego del número secreto');
//Variables
let numeroMaximoPosible = 10;
//let numeroSecreto = 4;
//vamos a usar random con seudorandom y métodos como Math para poder multiplicar, y Floor para dejarlo en entero menor usando Math.floor y +1 evitamos el cero
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let eleccion = 0;
intentos = 1;
//sustituimos esta variable porque lo vamos a usar con operador ternario
//let palabraVeces = 'vez';
let maximosIntentos = 6;

console.log (numeroSecreto);

if (intentos > 1) {
while (eleccion != numeroSecreto) { 
    eleccion = parseInt(prompt(`Me indicas un número del 1 al ${numeroMaximoPosible}`));
    

    console.log(eleccion);
    /*Este código realiza la comparación*/

    if (eleccion == numeroSecreto) {
        //alert(`Adivinaste, el número es: ${eleccion} lo lograste en ${intentos} ${palabraVeces}`);
        //usando templete strings o interpolación o comillas invertidas alt+96 la otra forma es digitando + variable fuera de las comillas
          alert(`Adivinaste, el número es: ${eleccion} lo lograste en ${intentos} ${intentos == 1 ? 'vez': 'veces'}`);  
          //usando operador ternario  
    } else {
        if(eleccion > numeroSecreto){
            alert ('El número secreto es menor');
            }else {
                alert ('El número secreto es mayor');
            }
            //incrementamos el contador cuando no acierta
            //intentos = intentos+1;
            //intentos += 1;
            intentos++;
            //palabraVeces = 'veces';
            if (intentos > 3) {
                alert (`Llegaste al número máximo de ${maximosIntentos} intentos`);
                break;
            }
            //La condicion no se cumplio
            // alert ('Lo siento, no acertó el número');
    }//finif
}//finWhile
}//finif
