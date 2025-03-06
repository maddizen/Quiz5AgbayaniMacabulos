import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.uuid}/`);
      setProduct(data);
    };
    fetchProduct();
  }, [match.params.uuid]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <p>Rating: {product.rating}</p>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock}</p>
    </div>
  );
};

export default ProductScreen;
