
function carrito(){
    let prenda = prompt("Ingresar prenda seleccionada")
    while( prenda != "finalizar compra"){
        alert(`Agregaste al carrito ${prenda}`)
        prenda = prompt("Ingrese otra prenda o finalizar compra").toLowerCase()}
    }
    carrito()

    function tomarFormaDePago(){
        let pago = prompt("Ingrese método de pago(efectivo,debito,credito)")
        return pago.toLowerCase() 
    }

    function formaDePago(metodo){
      if ((metodo== "efectivo") || (metodo== "debito")){
         alert("Tu reserva se hizo con éxito, el pago se realizará en el local")
      }else if (metodo== "credito") {
         alert("En la próxima ventana podrás elegir las cuotas")
      } else {
        alert("Tu reserva no concluyo, elige un método de pago válido.")}
    }
    let pagoConcretado = tomarFormaDePago();
    formaDePago(pagoConcretado);
     
    function cuotas() {
            let cuotas = parseInt(prompt("Si elegiste pagar con crédito, ingresa en cuantas cuotas (máximo 12), sino cancelar"))
        if (cuotas==3){
            alert("Tu pago se realizará en 3 cuotas sin interes")
        }else if ((cuotas => 4) && (cuotas <= 12)){
            alert(`Tu pago se realizará en ${cuotas} cuotas con interes`)
        }else{
            alert("Tu pago no se realizará con tarjeta de crédito, compra finalizada.")
        }
    }
     
    cuotas()