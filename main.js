
const productos = [ 
    {nombre: "conjunto nina", precio: 1800},
    {nombre: "body catalina", precio: 2300},
    {nombre: "body beta", precio: 2500},
    {nombre: "boxer acrobata", precio: 1300},
    {nombre: "boxer calvin klein", precio: 1000},
    {nombre: "medias element", precio: 450},
    {nombre: "medias floyd", precio: 400},
];

let compra = [];

let todoslosProductos = productos.map((producto)=> producto.nombre)
alert(`A contuacion te presentamos nuestros productos disponibles: ${todoslosProductos.join(" - ")}`)

function carrito(){
    let prenda = prompt("Ingresar prenda seleccionada").toLowerCase()
    let precio = 0

    while( prenda != "finalizar compra"){
        alert(`Agregaste al carrito ${prenda}`)

        if ((prenda== "conjunto nina") || (prenda== "conjunto  animal print") || (prenda== "body catalina") || (prenda== "body beta") || (prenda== "boxer acrobata") || (prenda== "boxer calvin klein") || (prenda== "medias element") || (prenda== "medias floyd")){
            switch(prenda){
                case "conjunto nina":
                    precio = 1800;
                    break;  
                case "body catalina":
                    precio = 2300;
                    break;   
                case "body beta":
                    precio = 2500;
                    break;                
                case "boxer acrobata":
                    precio = 1300;
                    break;
                case "boxer calvin klein":
                    precio = 1000;
                    break;
                case "medias element":
                    precio = 450;
                    break;    
                case "medias floyd":
                    precio = 400;
                    break; 
                default:
                    break;
                } 
                let unidades = parseInt(prompt("Cuantas unidades quieres agregar al carrito?"))
                compra.push({prenda,precio,unidades})
            }else{
                alert("No tenemos ese producto disponible")}

         prenda = prompt("Ingrese otra prenda o finalizar compra").toLowerCase()}

         compra.forEach ((compraFinal) => {
            alert (`producto: ${compraFinal.prenda}, unidades: ${compraFinal.unidades},total por producto: ${compraFinal.unidades * compraFinal.precio} `)
       })
    } 
    carrito()
    
    const total = compra.reduce((acc, el) => acc + el.precio * el.unidades, 0) 
    console.log(total)

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