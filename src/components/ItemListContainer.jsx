import React from 'react';
import './ItemListContainer.css'; // Archivo de estilos opcional

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
