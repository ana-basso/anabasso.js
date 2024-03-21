


document.addEventListener("DOMContentLoaded", function() {
  const productos = [
    { id: 1, nombre: 'Pileta', precio: 50000, imagen: 'c-3.jpg' },
    { id: 2, nombre: 'Pileta para baño', precio:60000, imagen: 'b-2.jpg' },
    { id: 3, nombre: 'Canilla', precio: 70000, imagen: 'c-1.jpg' }
  ];

  const productosEnCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

  const productosDiv = document.getElementById('productos');
  const carritoUL = document.getElementById('lista-carrito');
  const totalSpan = document.getElementById('total');
  function mostrarProductos() {
    productos.forEach(producto => {
      const div = document.createElement('div');
      div.classList.add('producto');
      div.innerHTML = `
        <img src="../imagen/${producto.imagen}" alt="${producto.nombre}">
        <p>${producto.nombre}</p>
        <p>Precio: $${producto.precio}</p>
        <button class="agregar-carrito" data-id="${producto.id}">Añadir al carrito</button>
      `;
      productosDiv.appendChild(div);
    });
  }

  function mostrarProductosEnCarrito() {
    carritoUL.innerHTML = '';
    let total = 0;
    productosEnCarrito.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `${item.nombre} - Cantidad: ${item.cantidad} - Precio: $${item.precio * item.cantidad}`;
      carritoUL.appendChild(li);
      total += item.precio * item.cantidad;
    });
    totalSpan.textContent = `$${total}`;
  }

  function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    const productoEnCarrito = productosEnCarrito.find(item => item.id === id);

    if (productoEnCarrito) {
      productoEnCarrito.cantidad++;
    } else {
      productosEnCarrito.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: 1
      });
    }

    localStorage.setItem('carrito', JSON.stringify(productosEnCarrito));
    mostrarProductosEnCarrito();
  }

  mostrarProductos();
  mostrarProductosEnCarrito();

  productosDiv.addEventListener('click', e => {
    if (e.target.classList.contains('agregar-carrito')) {
      const id = parseInt(e.target.getAttribute('data-id'));
      agregarAlCarrito(id);
    }
  });

  document.getElementById('comprar').addEventListener('click', () => {
    alert('¡Gracias por su compra!');
    localStorage.removeItem('carrito');
    productosEnCarrito.length = 0;
    mostrarProductosEnCarrito();
  });
});
