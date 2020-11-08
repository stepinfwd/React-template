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
      <div className="product-card-container">
        <h3>{product.data.test}</h3>
        <img src={product.data.image}></img>
        <h3>
          $<span style={{ paddingLeft: ".5rem" }}></span>
          {product.data.price}
        </h3>
        <p>{product.data.text}</p>
      </div>
    );
  }

  return <div></div>;
}
export default Product;
