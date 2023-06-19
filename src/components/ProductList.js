import React from 'react';
import '../css/ProductList.css';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img className="product-image" src={product.image} alt={product.name} />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
