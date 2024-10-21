import React from 'react';
import { useParams } from 'react-router-dom';
import blueLabel from '../assets/blueLabel.webp';
import redLabel from '../assets/redLabel.webp';
import blackLabel from '../assets/blackLabel.webp';
import '../styles/ItemDetail.css';

const items = {
  blueLabel: {
    name: 'Johnnie Walker Blue Label',
    image: blueLabel,
    description: 'Descripción del Blue Label.'
  },
  redLabel: {
    name: 'Johnnie Walker Red Label',
    image: redLabel,
    description: 'Descripción del Red Label.'
  },
  blackLabel: {
    name: 'Johnnie Walker Black Label',
    image: blackLabel,
    description: 'Descripción del Black Label.'
  }
};

const ItemDetail = () => {
  const { id } = useParams();
  const item = items[id];

  return (
    <div className="item-detail-container">
      <h1>{item.name}</h1>
      <img src={item.image} alt={item.name} className="item-image" />
      <p>{item.description}</p>
    </div>
  );
};

export default ItemDetail;