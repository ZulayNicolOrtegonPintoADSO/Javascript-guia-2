addEventListener("DOMContentLoaded", ()=>{
    // 4. Cálculo de áreas - Elige una figura geométrica:" Triángulo y Círculo
    // ¿Qué figura quiere calcular (Escriba T o C)?
    // Triangulo = base * altura / 2
    // Circulo = PI * radio* radio
    let figura = Number(prompt("Escoge una opción: \n 1.Triángulo \n 2.Círculo"))
    if(figura == 1){
        let b = Number(prompt("Ingrese la base del triángulo:"))
        let h = Number(prompt("Ingrese la altura del triángulo:"))
        console.log(`El área de la figura es ${(b*h)/2}`)
    }
    if(figura == 2){
        let r = Number(prompt("Ingrese el radio del círculo:"))
        console.log(`El área de la figura es ${(Math.PI)*r**2}`)
    }
  })