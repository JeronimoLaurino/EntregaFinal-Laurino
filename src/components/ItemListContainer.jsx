import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ItemListContainer.css';

import blueLabel from '../assets/blueLabel.webp';
import redLabel from '../assets/redLabel.webp';
import blackLabel from '../assets/blackLabel.webp';

const fetchItems = async (categoryId) => {
  const data = [
    {
      id: 'blueLabel',
      name: 'Johnnie Walker Blue Label',
      image: blueLabel
    },
    {
      id: 'redLabel',
      name: 'Johnnie Walker Red Label',
      image: redLabel
    },
    {
      id: 'blackLabel',
      name: 'Johnnie Walker Black Label',
      image: blackLabel
    }
  ];
  return categoryId ? data.filter(item => item.id === categoryId) : data;
};

const ItemListContainer = ({ greeting }) => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadItems = async () => {
      const data = await fetchItems(id);
      setItems(data);
    };
    loadItems();
  }, [id]);

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <div className="item-list">
        {items.map(item => (
          <div className="item-card" key={item.id}>
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <h2>{item.name}</h2>
              <Link to={`/item/${item.id}`} className="btn btn-primary">Ver Detalles</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;