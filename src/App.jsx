import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartPage from './components/CartPage';
import Checkout from './components/Checkout';
import ContactPage from './components/ContactPage';

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, quantity) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      const updatedItems = cartItems.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + quantity } 
          : cartItem
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity }]);
    }
    setCartCount(cartCount + quantity);
  };

  const handleCheckout = (userInfo) => {
    setCartItems([]);
    setCartCount(0);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Router>
      <div>
        <NavBar cartCount={cartCount} />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a The Whiskey" />} />
          <Route path="/product/:id" element={<ItemDetailContainer addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} totalPrice={totalPrice} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} totalPrice={totalPrice} onCheckout={handleCheckout} />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;