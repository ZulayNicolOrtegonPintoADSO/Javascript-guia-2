addEventListener("DOMContentLoaded", ()=>{
    // 6. Considere dos variables llamadas temperatura y presión. Escriba una sentencia if-else que muestre en pantalla la palabra Alarma si la variable presión es mayor a 200 o si la variable temperatura es mayor a 100. En caso contrario, se debe mostrar en pantalla la palabra Normal.
    let temperatura = Number(prompt("Ingrese valor para temperatura:"))
    let presión = Number(prompt("Ingrese valor para presión:"))
    if(temperatura > 100 | presión > 200){
        console.log(`******************************ALERTA******************************************`)
    }
    else{
        console.log(`_-_-_-_-_-_-_-_-NORMAL_-_-_-_-_-_-_-_-`)
    }
  })