addEventListener("DOMContentLoaded", ()=>{

    // 1. Determinar si un número es positivo y menor que 100. 
    
    let num = Number(prompt("Ingrese un número:"))

    if(num < 0){
        console.log(`El número ${num} es negativo`)
    }

    else{
        if (num > 0, num < 100){
            console.log(`El número ${num} es postivo menor que 100`)
        }
        else{
            console.log(`El número ${num} es positivo mayor que 100`)
        }
    }

  })