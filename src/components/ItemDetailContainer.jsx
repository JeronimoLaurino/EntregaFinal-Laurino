import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';

import blueLabel from '../assets/blueLabel.webp';
import redLabel from '../assets/redLabel.webp';
import blackLabel from '../assets/blackLabel.webp';

const productData = {
  blueLabel: {
    name: "Johnnie Walker Blue Label",
    description: "Un whisky escocés de lujo, suave y con notas de humo y especias.",
    image: blueLabel
  },
  redLabel: {
    name: "Johnnie Walker Red Label",
    description: "Un whisky escocés clásico, conocido por su sabor robusto y versatilidad.",
    image: redLabel
  },
  blackLabel: {
    name: "Johnnie Walker Black Label",
    description: "Un whisky escocés con un perfil de sabor equilibrado, con toques de frutas y especias.",
    image: blackLabel
  }
};

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = () => {
      const productInfo = productData[id];
      setProduct(productInfo);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Cargando...</div>;

  return (
    <div className="item-detail-container">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="item-image" />
      <p>{product.description}</p>
    </div>
  );
};

export default ItemDetailContainer;