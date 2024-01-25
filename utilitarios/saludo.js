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
