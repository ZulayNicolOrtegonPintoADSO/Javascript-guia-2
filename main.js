addEventListener("DOMContentLoaded", ()=>{
    //13. En una tienda de HELADO da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C.
    // Los descuentos son los siguientes: Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento
    let valor = Number(prompt("Ingrese valor de compra:"))
    let escoge = prompt("¿Tiene membresía? si - no")
    if(escoge=="si"){
        let membresía = prompt("¿Qué tipo de membresía tiene? A , B o C") 
        if(membresía == "A"){
            desc= valor*0.10
            console.log(`Por ser de membresía A tiene un descuento del 10%, el total a pagar es ${valor-desc}`)
        }
        else if(membresía == "B"){
            desc= valor*0.15
            console.log(`Por ser de membresía B tiene un descuento del 15%, el total a pagar es ${valor-desc}`)
        }
        else if(membresía == "C"){
            desc= valor*0.20
            console.log(`Por ser de membresía C tiene un descuento del 20%, el total a pagar es ${valor-desc}`)
        }
    }
    else{
        console.log(`El total a pagar de su compra es:`)
    }

        
  })