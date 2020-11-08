import React from "react";
import "./productCard.css";
import shoe from "./pexels-erik-mclean-4987534.jpg";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const { details } = props;
  console.log("der", details);

  return (
    <div className="product-card">
      <Link to={`/products/${details.id}`}>
        <div
          className="product-card-img"
          style={{ backgroundImage: `url(${details.image})` }}
        ></div>
      </Link>
      <div className="product-card-details">
        <h2>{details.name}</h2>
        <p> {details.price}</p>
        <p>{details.test}</p>
      </div>
      <Link to={`/products/${details.id}`}>
        <button>View</button>\
      </Link>
    </div>
  );
}

export default ProductCard;
