addEventListener("DOMContentLoaded", ()=>{
    // 9. Realizar el algoritmo que lea N números, calcule y escriba la suma de los pares y el producto de los impares. Numero par es aquel que su residuo igual a cero (num mod !=0)
    
    pares = 0
    impares =1
    contador = 0 
    cantidad = Number(prompt("Cantidad de números a añadir"))
    while(contador < cantidad){
        contador += 1
        let num = Number(prompt("Número:"))
        if(num %2==0){
            console.log(`El número es par`)
            pares += num
        }

        else{
            console.log(`El número es impar`)
            impares= impares * num
            impares= impares 
        }
    }
    console.log(`La suma de los pares es ${pares} y el producto de los impares es ${impares}`)
  })