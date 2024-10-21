import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Checkout.css';

const Checkout = ({ cartItems, totalPrice, onCheckout }) => {
  const [userInfo, setUserInfo] = useState({ name: '', email: '', address: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheckout(userInfo);
    alert('Compra finalizada con éxito');
    navigate('/');
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="order-summary">
        <h2>Resumen del Pedido</h2>
        {cartItems.map(item => (
          <div key={item.id} className="order-item">
            <span>{item.name}</span>
            <span>Cantidad: {item.quantity}</span>
            <span>Precio: ${item.price.toFixed(2)}</span>
          </div>
        ))}
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
      </div>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h2>Información del Usuario</h2>
        <input type="text" name="name" placeholder="Nombre" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Correo Electrónico" onChange={handleChange} required />
        <input type="text" name="address" placeholder="Dirección" onChange={handleChange} required />
        <button type="submit">Finalizar Compra</button>
      </form>
    </div>
  );
};

export default Checkout;