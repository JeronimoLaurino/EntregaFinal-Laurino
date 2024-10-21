import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import '../styles/ItemDetailContainer.css';
import blueLabel from '../assets/blueLabel.webp';
import redLabel from '../assets/redLabel.webp';
import blackLabel from '../assets/blackLabel.webp';

const fetchItemDetails = async (id) => {
  const items = [
    { id: 'blueLabel', name: 'Johnnie Walker Blue Label', image: blueLabel, price: 150, description: 'Descripción del Blue Label.' },
    { id: 'redLabel', name: 'Johnnie Walker Red Label', image: redLabel, price: 100, description: 'Descripción del Red Label.' },
    { id: 'blackLabel', name: 'Johnnie Walker Black Label', image: blackLabel, price: 80, description: 'Descripción del Black Label.' }
  ];
  return items.find(item => item.id === id);
};

const ItemDetailContainer = ({ addToCart }) => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const loadItem = async () => {
      const itemDetails = await fetchItemDetails(id);
      setItem(itemDetails);
    };
    loadItem();
  }, [id]);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleAddToCart = () => {
    addToCart(item, quantity);
  };

  if (!item) return <div>Cargando...</div>;

  return (
    <div className="item-detail-container">
      <ItemDetail item={item} />
      <div className="quantity-selector">
        <button className="quantity-button" onClick={decrement}>-</button>
        <input type="text" className="quantity-display" value={quantity} readOnly />
        <button className="quantity-button" onClick={increment}>+</button>
      </div>
      <button className="add-item-button" onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetailContainer;