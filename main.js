addEventListener("DOMContentLoaded", ()=>{
    // 8. En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora trabajada se le paga a $10000. Para calcular su pago es necesario conocer el total de horas trabajadas.
    let cargo = Number(prompt("Escoja a que cargo pertenece: \n 1. Planta \n 2. Administrativo"))
    if(cargo == 1){
        let horas = Number(prompt("Cantidad de horas trabajadas: "))
        console.log(`El total a pagar es ${horas*20000}`)
    }
    if(cargo == 2){
        let horas = Number(prompt("Cantidad de horas trabajadas: "))
        console.log(`El total a pagar es ${horas*10000}`)
    }
  })