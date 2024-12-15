import React from 'react';
import { useCart } from './CartContext';  
import productsData from './data/products.json';  

import './ProductPage.css'; 

const ProductPage = () => {
  const { addToCart } = useCart();  

  return (
    <div className="product-page">
      <h1>Product List</h1>
      <div className="product-list">
        {productsData.products.map(product => (
          <div className="product-item" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
