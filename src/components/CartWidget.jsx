import React from 'react';
import { BsCart } from 'react-icons/bs';
import './CartWidget.css';

const CartWidget = () => {
  const cartItems = [
    { id: 1, name: 'Blue Label Whiskey', quantity: 2 },
    { id: 2, name: 'Red Label Whiskey', quantity: 1 }
  ];

  return (
    <div className="cart-widget">
      <BsCart size={24} />
      {cartItems.length > 0 && (
        <span className="cart-badge">{cartItems.length}</span>
      )}
    </div>
  );
};

export default CartWidget;