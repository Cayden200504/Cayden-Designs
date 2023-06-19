import React from 'react';
import '../css/ProductListMWC.css';

const ProductListMWC = ({ products }) => {
  return (
    <div className="product-listMWC">
      {products.map((product) => (
        <div className="product-cardMWC" key={product.id}>
          <img className="product-imageMWC" src={product.image} alt={product.name} />
          <h3 className="product-nameMWC">{product.name}</h3>
          <p className="product-descriptionMWC">{product.price}</p>
        </div>
      ))}
      
    </div>
  );
};

export default ProductListMWC;