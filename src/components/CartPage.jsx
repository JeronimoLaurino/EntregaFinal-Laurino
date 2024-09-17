import React from 'react';
import './CartPage.css';

const CartPage = () => {
  const cartItems = [
    { id: 1, name: 'Blue Label Whiskey', quantity: 2, price: 100 },
    
  ];

  const total = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="cart-page">
      <h1>Carrito de Compras</h1>
      <ul className="cart-items">
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span>Cantidad: {item.quantity}</span>
            <span>Precio: ${item.price * item.quantity}</span>
          </li>
        ))}
      </ul>
      <h2>Total: ${total}</h2>
    </div>
  );
};

export default CartPage;