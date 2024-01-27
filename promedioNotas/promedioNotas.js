mostrarPromedio=function(){
    let mostrarPromedio;
    let promedioConDosDecimales;
    mostrarPromedio=calcularPromedioNotas();
    promedioConDosDecimales=mostrarPromedio.toFixed(2);
    cambiarTexto("lblResultado",promedioConDosDecimales);
}
calcularPromedioNotas=function(){
    let nota1;
    let nota2;
    let nota3;
    let promedio;
    let promedioDosDecimales;
    let promedioTotal;
//recupero los numeros como float
    nota1=recuperarFlotante("lblN1");
    nota2=recuperarFlotante("lblN2");
    nota3=recuperarFlotante("lblN2");
//invoco a la función calcularPromedio pasandole las 3 notas como parametros
    promedio=calcularPromedio(nota1,nota2,nota3);
    return promedio;
}
