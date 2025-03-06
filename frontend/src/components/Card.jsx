import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description.slice(0, 50)}...</p>
      <div>
        <span>Rating: {product.rating}</span>
        <span>Price: ${product.price}</span>
      </div>
      <Link to={`/product/${product.uuid}`}>View Details</Link>
    </div>
  );
};

export default Card;
