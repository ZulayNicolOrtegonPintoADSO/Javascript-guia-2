addEventListener("DOMContentLoaded", ()=>{
    // 3. Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el menor o si son iguales.
    mayor = 0
    menor = 1000000
    for(i = 0; i <= 2; i++){
        let num = Number(prompt("Ingrese número:"))
        if(num > mayor){
            mayor = num
        }
        if(num < menor){
            menor = num
        }

    }

    console.log(`El número mayor es: ${mayor} , El número menor es: ${menor}`)
  })