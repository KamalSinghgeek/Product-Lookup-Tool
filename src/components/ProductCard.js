import React from 'react';

const ProductCard = ({ product }) => {
  const { title, price, description, category, image, rating } = product;

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h2>{title}</h2>
      <p className="category"><strong>Category:</strong> {category}</p>
      <p className="description"><strong>Description:</strong> {description}</p>
      <p className="price"><strong>Price:</strong> ${price}</p>
      <div className="rating">
        <strong>Rating:</strong> {rating.rate} / 5 ({rating.count} reviews)
      </div>
    </div>
  );
};

export default ProductCard;
