calcularTasaInteres=function(ingresoAnual){
  let valorTasaInteres 
    if(ingresoAnual<300000){
    valorTasaInteres= 16
  } else if(ingresoAnual >= 300000 && ingresoAnual < 500000){
    valorTasaInteres= 15
  } else if(ingresoAnual >= 500000 && ingresoAnual < 1000000){
    valorTasaInteres= 14
  } else if(ingresoAnual >= 1000000 && ingresoAnual < 2000000){
    valorTasaInteres= 13
  } else if(ingresoAnual < 2000000){
    valorTasaInteres= 12
  }
  return valorTasaInteres;
}

calcularCapacidadPago=function(edad,ingresos,egresos){
    let capacidad;
    let capacidadPago;
    if(edad>50){
        capacidad=0.3*(ingresos-egresos)
        capacidadPago=capacidad
    } else if(edad<=50){
        capacidad=0.4*(ingresos-egresos)
        capacidadPago=capacidad
    }
    return capacidadPago;
}

calcularDescuento=function(precio,cantidad){    
    let valorPrecioSinDescuento;
    let descuento;
    let valorConDescuento;
    if(cantidad<3){
        valorProducto=cantidad*precio;
    } else if(cantidad>=3 && cantidad<=5){
        valorPrecioSinDescuento=precio*cantidad;
        descuento=0.02*(cantidad*precio)
        valorConDescuento=descuento-valorPrecioSinDescuento;
    } else if(cantidad>=6 && cantidad<=11){
        valorPrecioSinDescuento=precio*cantidad;
        descuento=0.03*(cantidad*precio)
        valorConDescuento=descuento-valorPrecioSinDescuento;
    } else if(cantidad>=12){
        valorPrecioSinDescuento=precio*cantidad;
        descuento=0.04*(cantidad*precio)
        valorConDescuento=descuento-valorPrecioSinDescuento;
    }
    return valorConDescuento;
}

determinarColesterolLDL=function(nivelColesterol){
    let valorColesterol;
    if(nivelColesterol<100){
        valorColesterol="Colesterol LDL(OPTIMO)"
    } else if(nivelColesterol>=100 && nivelColesterol<=129){
        valorColesterol="Colesterol LDL(CASI OPTIMO)"
    } else if(nivelColesterol>=130 && nivelColesterol<=159){
        valorColesterol="Colesterol LDL(LIMITE SUPERIOR DEL RANGO NORMAL)"
    } else if(nivelColesterol>=160 && nivelColesterol<190){
        valorColesterol="Colesterol LDL(ALTO)"
    } else if(nivelColesterol>=190){
        valorColesterol="Colesterol LDL(MUY ALTO)"
    }
    return valorColesterol;
}

validarClave=function(clave){
    let numeroCaracteres = clave.length;
    let valor= false
    if(numeroCaracteres>=8 && numeroCaracteres<=16){
        valor= true
    }
    return valor;
}

esMayuscula=function(caracter){
    let valorCaracter=caracter.charCodeAt(0);
    let valor= false;
    if(valorCaracter>=65 && valorCaracter<=90){
        valor=true
    }
    return valor;
}
esMinuscula=function(caracter){
    let valorCaracter=caracter.charCodeAt(0);
    let valor= false;
    if(valorCaracter>=97 && valorCaracter<=122){
        valor=true
    }
    return valor;
}
esDigito=function(caracter){
    let valorCaracter=caracter.charCodeAt(0);
    let valor= false;
    if(valorCaracter>=48 && valorCaracter<=57){
        valor=true
    }
    return valor;
}
darPermiso=function(notaMatematica,notaFisica,notaGeometria){
    let valor= false;
    if(notaMatematica>=90 || notaFisica>=90 || notaGeometria >=90){
        valor= true
    }
    return valor;
}

otorgarPermiso=function(notaMatematica,notaFisica,notaGeometria){
    let valor= false;
    if((notaMatematica>=90 || notaFisica >=90)&&notaGeometria>=80){
        valor=true
    }
    return valor;
}

dejarSalir=function(notaMatematica,notaFisica,notaGeometria){
    let valor= false;
    if((notaMatematica>=90 || notaFisica >=90 || notaGeometria >=90) && notaFisica>notaMatematica){
        valor= true
    }
    return valor;
}
