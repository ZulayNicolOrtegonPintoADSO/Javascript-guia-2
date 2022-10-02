addEventListener("DOMContentLoaded", ()=>{
    //12. Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él segundo, en caso contrario indicar con un mensaje que la operación no es posible realizarla.
    let num1 = Number(prompt("Número 1:")) 
    let num2 = Number(prompt("Número 2"))
    if(num1 > num2){
        console.log(`Como el primer número es mayor se le resta el número 2, el resultado sería:${num1-num2}`)
    }
    else{
        console.log(`CHALE, NO PUEDO MARTA :"C`)
    }
        
  })