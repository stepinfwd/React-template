import React from "react";
import "./productCard.css";
import shoe from "./pexels-erik-mclean-4987534.jpg";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const { details } = props;
  console.log("der", details);

  return (
    <div className="align">
      <div className="product-container">
        {/* <Link to={`/products/${details.id}`}> */}
        <div
          className="square"
          style={{ backgroundImage: `url(${details.image})` }}
        ></div>

        {/* </Link> */}
        <div className="h1">
          <h1>{details.name}</h1>
          <p> {details.price}</p>
          <p>{details.test}</p>

          <Link to={`/product/${details.id}`}>
            <div>
              <button className="button">View</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
