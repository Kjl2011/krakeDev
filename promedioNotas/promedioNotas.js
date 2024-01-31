mostrarPromedio=function(){
    let mostrarPromedio;
    let promedioConDosDecimales;
    let promedio;
    mostrarPromedio=calcularPromedioNotas();
    promedioConDosDecimales=mostrarPromedio.toFixed(2);
    promedio=promedioConDosDecimales;
    mostrarGif(promedio);
    cambiarTexto("lblResultado",promedio);
    if(promedio>0 && promedio<5){
        cambiarTexto("lblResultado","REPROBASTE");
    }else if(promedio>=5 && promedio<=8){
        cambiarTexto("lblResultado","Buen Trabajo");
    }else if(promedio>8 && promedio<=10){
        cambiarTexto("lblResultado","Excelente");
    }
}
mostrarGif=function(numero){
    if(numero>=5 && numero<=8){
        cambiarImagen("imgGif","buentrabajo.gif");
    }else if(numero>8 && numero<=10){
        cambiarImagen("imgGif","excelente.gif");
    }
}
calcularPromedioNotas=function(){
    let nota1;
    let nota2;
    let nota3;
    let promedio;

//recupero los numeros como float
    nota1=recuperarFlotante("lblN1");
    nota2=recuperarFlotante("lblN2");
    nota3=recuperarFlotante("lblN2");
//invoco a la función calcularPromedio pasandole las 3 notas como parametros
    promedio=calcularPromedio(nota1,nota2,nota3);
    return promedio;
}

