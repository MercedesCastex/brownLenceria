const carritoContenedor = document.getElementById("carritoContenedor");
const verCarrito = document.getElementById("verCarrito");
const modalConteiner = document.getElementById ("modalConteiner");
const cantidadCarrito = document.getElementById ("cantidadCarrito");
const libreria = document.getElementsByClassName ("galeriaDepor");


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Productos.classList.add("card");

Productos.forEach((product) =>{
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <h3> ${product.nombre} </h3>
        <p class="parrafo"> $${product.precio} </p>
        <img src= "${product.img}">
    `;
    carritoContenedor.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {
      carrito.push({
        img: product.img,
        id: product.id,
        nombre: product.nombre,
        precio: product.precio, 
        cantidad: product.cantidad,
      })
      carritoCounter();
      saveLocal();
    })
});

verCarrito.addEventListener("click", () => {
    modalConteiner.innerHTML = "";
    modalConteiner.style.display= "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <p class= "modal-header-title"> Carrito </p>
      `;
    modalConteiner.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.className = "modal-header-button";
    modalbutton.innerText = "X";

    modalbutton.addEventListener("click", () => {
        modalConteiner.style.display = "none";
    })

    modalHeader.append(modalbutton);

    carrito.forEach((product) =>{
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
        <img src="${product.img}"
        <p> ${product.nombre} </p>
        <p> $${product.precio} </p>
        <p> ${product.cantidad} </p>
         `;
    
         modalConteiner.append(carritoContent);
    });

    const total = carrito.reduce((acc, el ) => acc + el.precio, 0);

    const totalbuying = document.createElement("div");
    totalbuying.className = "total-content";
    totalbuying.innerHTML = ` total a pagar $${total}
     `;
     modalConteiner.append(totalbuying);
});

const carritoCounter = () => {
  cantidadCarrito.style.display = "block";
  const carritoLength = carrito.length;
  localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

const saveLocal = () => {
  localStorage.setItem("carrito",JSON.stringify(carrito));
};

// COMENTARIOS 

document.getElementById('comentariodId');

fetch('../comentarios.json')
.then( (resp) => resp.json() )
    .then( (data) => {
       
        data.forEach((comentario) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <h4>${comentario.nombre}</h4>
                <p>${comentario.comentario}</p>
            `
            comentarioId.append(li)
        })
    })

  