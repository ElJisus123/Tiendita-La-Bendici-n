const productosContenedor = document.getElementById("productos");

function crearTarjeta({title, description, image, price}) {
    const contenedor = document.createElement("div");
    productosContenedor.appendChild(contenedor);

    
    const imagen = document.createElement("img");
    imagen.className = "editarimagen";
    imagen.src = image;
    contenedor.appendChild(imagen);
    
    const titulo = document.createElement("h1");
    titulo.innerText = title;
    contenedor.appendChild(titulo);

    const info = document.createElement("div");
    info.className = "info";
    const descripcion = document.createElement("p");
    descripcion.innerText = description;
    const precio = document.createElement("p");
    precio.innerText = `Precio: $${price}`;
    info.appendChild(descripcion);
    info.appendChild(precio);
    
    contenedor.appendChild(info);
}

async function conseguirInformacion() {
    const respuesta = await fetch("https://fakestoreapi.com/products");
    const informacion = await respuesta.json();

    informacion.forEach(producto => {
        crearTarjeta(producto);
    });
}

conseguirInformacion();
