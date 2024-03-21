alert("Bienvenidos a marmoleria Rocas Ornamentales")

/*let consulta = confirm("¿Te puedo ayudar con tu compra?")

if (consulta === true) {

    let mercaderia = prompt("¿Que producto estarias necesitando?")
    let material = prompt("En que material necesitas tu " + mercaderia + " , \n 1. Granitos  \n 2. Marmoles")

    while (material != 1 & material != 2) {
        alert("Numero invalido");
        material = prompt("Ingresa 1 para granitos y 2 para marmoles")
    }

    let color = prompt("Elegi el color de tu " + mercaderia + " \n 1. BLANCO \n 2. NEGRO \n 3. GRIS")
    switch (color) {
        case "1": alert("Tenemos " + mercaderia + " de color " + color)
            break;
        case "2": alert("Tenemos " + mercaderia + " de color " + color)
            break;
        case "3": alert("Tenemos " + mercaderia + " de color " + color)
            break;
        default:
            while (color != 1 & color != 2 & color != 3) {
                alert("Ese color no esta disponible");
                color = prompt("Ingresa 1 para color BLANCO, 2 para color NEGRO, 3 para color GRIS")
            }

    }
    let resta = (a, b) => a - b
    let precio = x => x * 50000
    let metro = prompt("Elegi el metro cuadrado")
    let descuento = 10000
    let resultado = resta(precio(metro), descuento)
    alert("El precio del producto elegido es " + resultado)


}

const Producto = function (nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}
let p1 = new Producto("pileta johnson", 50000, 10)
let p2 = new Producto("pileta mi pileta", 60000, 10)
let p3 = new Producto("canilla", 70000, 10)

let complementarios = [p1, p2, p3]

const filtrarp = document.getElementById("filtrar");
filtrarp.addEventListener("click", () => { filtrarProducto(); });

const agregarp = document.getElementById("agregar");
agregarp.addEventListener("click", () => { agregarProducto(); })

body.innerHTML = "";

function filtrarProducto() {
    const body = document.querySelector("body");
    const input = document.getElementById("filter").value

    let clave = input.trim().toUpperCase();
    let filtro = complementarios.filter((producto) => producto.nombre.toUpperCase().includes(clave));

    if (filtro.length > 0) {

        const container = document.createElement("div");
        container.classList.add("card-container");

        filtro.forEach((producto) => {
            const card = document.createElement("div");
            card.classList.add("card");

            const nombre = document.createElement("h2");
            nombre.textContent = producto.nombre;
            card.appendChild(nombre);

            const precio = document.createElement("p");
            precio.textContent = `Precio: ${producto.precio}`;
            card.appendChild(precio);

            const stock = document.createElement("p");
            stock.textContent = `Stock: ${producto.stock}`;
            card.appendChild(stock);

            container.appendChild(card)
        });

        body.appendChild(container);
    }
    else {
        alert("No se encontro ninguna coincidencia" );
    }
}

function agregarProducto() {

    const form = document.createElement("form");

    form.innerHTML = `
    <label for="nombre-input">Nombre:</label>
    <input id="nombre-input" type="text" required>

    <label for="precio-input">Precio:</label>
    <input id="precio-input" type="number" step="0.01" required>

    <label for="stock-input">Stock:</label>
    <input id="stock-input" type="number" step="1" required>

    <button type="submit">Agregar</button>`;
 
    form.addEventListener("submit", function (event) {

    event.preventDefault();

        const nombreInput=document.getElementById("nombre-input").value.trim();
        const precioInput=parseFloat(document.getElementById("precio-input").value);
        const stockInput=parseInt(document.getElementById("stock-input").value);

        if (isNaN(precioInput) || isNaN(stockInput) || nombreInput === "") {
            alert("valor invalido")
            return;
            }

        const producto= new Producto(nombreInput,precioInput,stockInput);

        if (complementarios.some((elemento) => elemento.nombre ===producto .nombre)) {
                alert("El producto ya existe");
                return;
            }

           
        complementarios.push(Producto); 

            localStorage.setItem("productos",JSON.stringify(complementarios));
            alert(`Se ha agregado el producto ${producto.nombre}  a la lista.`);
         

            console.table(complementarios);

            const container = document.createElement('div');
            container.classList.add('card-container');

            
            complementarios.forEach((producto) => { 
                
                const card= document.createElement('div');
                container.classList.add('card');

                const nombre = document.createElement('h2')
                nombre.textContent=producto.nombre;
                card.appendChild(nombre);

                const precio = document.createElement('p')
                precio.textContent = `Precio: ${producto.precio}`; //comillas especiales  
                card.appendChild(precio);

                const stock = document.createElement('p')
                stock.textContent = `Stock: ${producto.stock}`; //comillas especiales 
                card.appendChild(stock);

                container.appendChild(card);
            });

            const body = document.querySelector('body');
            body.appendChild(container);
            form.reset();
        });

        const body = document.querySelector('body');
        body.appendChild(form);
                     
    
}*/
 
/*otro codigo/*

/*const productos = [{nombre:'Canilla johnson',precio:70000},{nombre:'Canilla Mi Pileta',precio:40000},{nombre:'bacha',precio:62000}]

let carrito=[]

let mensaje= '';
for ( let i=0 ;i<productos.length;i++){

    mensaje= mensaje+`${i+1}-${productos[i].nombre}${productos[i].precio}$\n`
    
}

let opcion=parseInt(prompt("ingrese una opcion o ESC para salir  \n" + mensaje ))
while (opcion!=='ESC'){
    carrito.push(productos[opcion-1]) 
    opcion=prompt("ingrese una opcion o ESC para salir  \n" + mensaje)   
}

console.log(carrito)

function agregarAlCarrito(articulo) {
    carrito.push(articulo);
    console.log(articulo + " ha sido agregado al carrito");
  }
  function mostrarCarrito() {
    console.log("Artículos en el carrito:");
    carrito.forEach(function(articulo) {
      console.log(articulo);
    });
  }
  <div>
  <input  type="text" id="filter">
  <button id="filtrar">Filtrar Producto</button>
  <button id="agregar">Agregar Producto </button>
</div>*/