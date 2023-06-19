import React from 'react';
import '../css/ProductListUpings.css';

const ProductListUpings= ({ products }) => {
  return (
    <div className="product-listUpings">
      {products.map((product) => (
        <div className="product-cardUpings" key={product.id}>
          <img className="product-imageUpings" src={product.image} alt={product.name} />
          <h3 className="product-nameUpings">{product.name}</h3>
          <p className="product-descriptionUpings">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductListUpings;