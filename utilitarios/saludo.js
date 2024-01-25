saludar=function(){
    //recuperar el valor de la caja de texto txtNombre
    let nombre=recuperarTexto("txtNombre");
    //recuperar el valor de la caja de texto txtApellido
    let apellido=recuperarTexto("txtApellido");
    //recuperar el valor de la caja de texto de txtEdad
    let edad=recuperarInt("txtEdad");
    //recuperar el valor de la caha de texto de txtEstatura
    let estatura=recuperarFloat("txtEstatura");
    //Aplico un mensaje de bienvenida
    let mensajeBienvenida="Bienvenido "+nombre+" "+apellido;
    //Aplico la funcion Mostrar Texto
    mostrarTexto("lblResultado",mensajeBienvenida);
    //Aplico una imagen para la bienvenida
    mostrarImagen("imgSaludo","./imagenes/imgG.gif");
    //Se aplica un borrador de la caja de txtNombre
    mostrarTextoCaja("txtNombre","")
}


mostrarImagen=function(idComponente,rutaImagen){
    let componente
    componente=document.getElementById(idComponente);
    componente.src=rutaImagen;
 }



mostrarTexto=function(idComponente,mensaje){
    let componente;

    componente=document.getElementById(idComponente);
    componente.innerText=mensaje;
}

mostrarTextoCaja=function(idComponente,mensaje){
    let componente;

    componente=document.getElementById(idComponente);
    componente.value=mensaje;
}


recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}


recuperarInt=function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorEntero= parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat=function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorFloat= parseFloat(valorCaja);
    return valorFloat;
}


