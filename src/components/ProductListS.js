import React from 'react';
import '../css/ProductListS.css';

const ProductListS = ({ products }) => {
  return (
    <div className="product-listS">
      {products.map((product) => (
        <div className="product-cardS" key={product.id}>
          <img className="product-imageS" src={product.image} alt={product.name} />
          <h3 className="product-nameS">{product.name}</h3>
          <p className="product-descriptionSS">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductListS;
