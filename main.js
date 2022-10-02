addEventListener("DOMContentLoaded", ()=>{
    // 7. Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede los $130.000 el descuento será del 15%, de lo contrario no hay descuento.
    subtotal=0
    cont=0
    let x = Number(prompt("Cantidad de pagos a añadir:"))
    while(cont < x){
        cont += 1
        let pago = Number(prompt("valor pago:"))
        subtotal += pago
        console.log(`El pago es de ${pago} para un subtotal de ${subtotal}`)
    }

    if(subtotal > 130000){
        console.log(`\n Su compra tiene un valor de ${subtotal} \n como su compra excede los 130000 tiene un descuento de 15% \n El total a pagar es de ${subtotal - (subtotal*0.15)}`)
    }

    else{
        console.log(`El total a pagar es ${subtotal}`)
    }


  })