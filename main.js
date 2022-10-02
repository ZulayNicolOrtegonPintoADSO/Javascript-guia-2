addEventListener("DOMContentLoaded", ()=>{
    //11. Programa para solicitar el nombre, apellido, edad y la nota promedio de 5 estudiantes de un curso de computación.
    cont=0
    let cantidad = Number(prompt("Cantidad de estudiantes:"))
    while(cont < cantidad){
        cont += 1
        let n = prompt("Ingrese nombre del alumno:")
        let a = prompt("Ingrese apellido del alumno:")
        let e = Number(prompt("Ingrese edad del alumno:"))
        let p = Number(prompt("Ingrese promedio del alumno:"))
        console.log(`El estudiante ${n} ${a} tiene ${e} años y un promedio de ${p} `)
    }
  })