import React, { useState, useEffect } from "react";
import "./product.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
function Product(props) {
  const { id } = useParams();

  const url = `https://5fa78e549def160016adaefd.mockapi.io/products/${id}`;
  const [product, setProduct] = useState({
    loading: false,
    data: null,
  });
  useEffect(() => {
    console.log("entey donw");
    setProduct({ loading: true, data: null });
    axios.get(url).then((res) => {
      setProduct({ loading: false, data: res.data });
    });
  }, [url]);
  if (product.loading)
    return (
      <div>
        {/* <p>Lodaing..........</p> */}
        <Loader />
      </div>
    );

  if (product.data) {
    return (
      <div className="align">
        <div className="product-container">
          <div
            className="square"
            style={{ backgroundImage: `url(${product.data.image})` }}
          ></div>

          <div className="h1">
            <h1>{product.data.name}</h1>
            <p> {product.data.price}</p>
            <p>{product.data.test}</p>
          </div>
        </div>
      </div>
    );
  }

  return <div></div>;
}
export default Product;
