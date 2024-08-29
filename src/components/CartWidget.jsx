import React from 'react';
import { BsCart } from 'react-icons/bs'; // Importar ícono de carrito
import './CartWidget.css'; // Archivo de estilos opcional

const CartWidget = () => {
  const itemCount = 5; // Número fijo de elementos en el carrito

  return (
    <div className="cart-widget">
      <BsCart size={24} />
      {itemCount > 0 && (
        <span className="cart-badge">{itemCount}</span>
      )}
    </div>
  );
};

export default CartWidget;
