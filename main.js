addEventListener("DOMContentLoaded", ()=>{
    // 2. Calcule el mayor de tres números, permitiendo leer 3 valores diferentes
    
    let num1 = Number(prompt("Número 1:"))
    let num2= Number(prompt("Número 2:"))
    let num3 = Number(prompt("Número 3:"))

    if (num1 > num2 && num1 > num3){
        console.log(`El número 1 es el mayor con un valor de: ${num1}`)
    }
    else if (num2 > num1 && num2 > num3){
        console.log(`El número 2 es el mayor con un valor de: ${num2}`)
    }
    else if(num3 > num1 && num3 > num1){
        console.log(`El número 3 es el mayor con un valor de: ${num3}`)
    }

    else{
        if(num1 == num2 && num1 == num3){
            console.log(`Los números son de igual valor`)
        }
        else if(num1 == num2 && num1 > num3){
            console.log(`Ay un empate de número mayor entre el num1 y num2 con un valor de${num1}`)
        }
        else if(num2 == num3 && num2 > num1){
            console.log(`Ay un empate de número mayor entre el num2 y num3 con un valor de${num2}`)
        }
        else if(num1 == num3 && num1 > num2){
            console.log(`Ay un empate de número mayor entre el num1 y num3 con un valor de${num1}`)}
    }
  })