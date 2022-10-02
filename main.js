addEventListener("DOMContentLoaded", ()=>{
    //10. Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados de: Iva, Subtotal y Total de la compra de los artículos.
    cont=0
    subtotal=0
    let iva = Number(prompt("Valor del iva en decimal: "))
    let cantidad = Number(prompt("Cantidad de productos a añadir:"))
    while(cont < cantidad){
        cont += 1
        let producto = Number(prompt("Valor del producto:"))
        subtotal += producto
        console.log(`El subtotal es ${subtotal}`)
    }
    console.log(`\n El valor en compra es ${subtotal} \n El iva es de ${iva} el total a pagar es ${subtotal + subtotal * iva}`)
  })