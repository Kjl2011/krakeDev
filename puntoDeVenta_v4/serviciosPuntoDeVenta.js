calcularValorDescuento=function(monto,porcentajeDescuento){
    let valorDescuento=(monto*porcentajeDescuento)/100;
    return valorDescuento;
}

calcularIVA=function(monto){
    let iva=(monto*0.12);
    let totalIva=iva.toFixed(2);
    let total=parseFloat(totalIva);
    return total;
}
calcularSubtotal=function(precio,cantidad){
    let valorSubtotal=precio*cantidad;
    return valorSubtotal;
}

calcularTotal=function(subtotal,descuento,iva){
    let valortotal=subtotal-descuento+iva;
    return valortotal;
}
