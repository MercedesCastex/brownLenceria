// COMENTARIOS 

const comentariosDiv = document.getElementById('comentariosId');

fetch('../comentarios.json')
.then( (resp) => resp.json() )
    .then( (data) => {
       
        data.forEach((comentario) => {
            const li = document.createElement('li')
            li.className = "comentarioCSS";
            li.innerHTML = `
                <h4>${comentario.nombre}</h4>
                <p>${comentario.comentario}</p>
            `
            comentariosDiv.appendChild(li)
        })
    })
