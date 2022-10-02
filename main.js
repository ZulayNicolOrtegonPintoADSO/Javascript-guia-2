addEventListener("DOMContentLoaded", ()=>{
    // 5. Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean positivos: área triangulo= lado * lado.
    let l1 = Number(prompt("Ingrese valor para lado 1:"))
    let l2 = Number(prompt("Ingrese valor para lado 2:"))
    if(l1>0 & l2>0){
        console.log(`EL ÁREA DEL RECTÁNGULO ES ${l1*l2}`)
    }
    else{
        console.log(`EL ÁREA DE LA FIGURA NO SE PUEDE CALCULAR POR QUE UNO O SUS DOS LADOS SON NEGATIVOS`)
    }
  })