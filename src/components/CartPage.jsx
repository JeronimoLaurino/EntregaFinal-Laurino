import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CartPage.css';

const CartPage = ({ cartItems, onCheckout }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Tu Carrito</h1>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: ${item.price}</p>
            </div>
          ))}
          <h2>Total: ${totalPrice}</h2>
          <Link to="/checkout">
            <button className="checkout-button">Proceder al Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;