import React from "react";

const MenuItem = ({ item, addToCart }) => {
  return (
    <div className="col-md-6 mb-4">
      <div className="card">
        <img
          src={item.image}
          alt={item.name}
          className="card-image-top"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.description}</p>
          <p className="card-text fw-bold">{item.price}</p>
          <button
            className="btn btn-dark btn-sm"
            onClick={() => addToCart(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
