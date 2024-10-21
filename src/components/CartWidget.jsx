import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import '../styles/CartWidget.css';

const CartWidget = ({ cartCount }) => {
  return (
    <div className="cart-widget">
      <FaShoppingCart />
      {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
    </div>
  );
};

export default CartWidget;