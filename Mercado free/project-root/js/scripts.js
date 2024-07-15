// Función para agregar un producto al carrito
function addToCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} ha sido agregado al carrito.`);
  }
  
  // Función para vaciar el carrito
  function clearCart() {
    localStorage.removeItem('cart');
    renderCart();
  }
  
  // Función para eliminar un producto del carrito
  function removeFromCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item !== productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
  }
  
  // Función para renderizar el carrito
  function renderCart() {
    const cartItems = document.getElementById('cart-items');
    if (!cartItems) return; // Verifica que el elemento exista
  
    cartItems.innerHTML = '';
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach(item => {
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      nameCell.textContent = item;
      const actionCell = document.createElement('td');
      const removeButton = document.createElement('button');
      removeButton.className = 'btn btn-danger';
      removeButton.textContent = 'Eliminar';
      removeButton.addEventListener('click', () => removeFromCart(item));
      actionCell.appendChild(removeButton);
      row.appendChild(nameCell);
      row.appendChild(actionCell);
      cartItems.appendChild(row);
    });
  }
  
  // Cargar carrito al iniciar la página
  document.addEventListener('DOMContentLoaded', function() {
    renderCart();
  
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('.card-title').textContent;
        addToCart(productName);
      });
    });
  
    const clearCartButton = document.getElementById('clear-cart');
    if (clearCartButton) {
      clearCartButton.addEventListener('click', clearCart);
    }
  });
  