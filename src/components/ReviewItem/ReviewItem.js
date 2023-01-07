import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { product, handleRemoveProduct } = props;
  const { name, img, price, shipping, quantity } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-item-container">
        <div className="item-details">
          <p className="product-name" title={name}>
            {name.length > 20 ? name.slice(0, 20) + "..." : name}
          </p>
          <p>
            <span>{price}</span>
          </p>
          <p>
            <span>{shipping}</span>
          </p>
          <p>
            <small>{quantity}</small>
          </p>
        </div>
        <div className="delete-btn">
          <button onClick={() => handleRemoveProduct(product)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
