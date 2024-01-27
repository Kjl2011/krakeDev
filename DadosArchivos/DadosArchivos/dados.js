jugar=function(){
    let aleatorio;
    aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    if(aleatorio>3){
        let ganar;
        ganar="GANASTE"
        cambiarTexto("lblResultado",ganar);
    }else{
        let perdiste;
        perdiste="PERDISTE";
        cambiarTexto("lblResultado",perdiste);
    }
}

//Crear una funcion llamada lanzarDado
//No recibe parametros
//Retorn un numero aleatorio entre 1 y 6

lanzarDado=function(){
    let aleatorio;
    let valordeDado;
    let solounValor;
    let totalDado;
    aleatorio=Math.random();
    valordeDado=aleatorio*6;
    solounValor=parseInt(valordeDado);
    totalDado=solounValor+1;
    return totalDado;
}