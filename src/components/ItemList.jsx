import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ items }) => {
    return (
        <div className="item-list">
            {items.map(item => (
                <div key={item.id} className="item">
                    <Link to={`/item/${item.id}`}>
                        <img src={item.image} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>Precio: ${item.price}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ItemList;