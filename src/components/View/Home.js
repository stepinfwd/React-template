import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader";
import ProductCard from "../ProductCard";

function Home() {
  let content = null;
  const { id } = useParams();

  const url = "https://5fa78e549def160016adaefd.mockapi.io/products";
  const [products, setProducts] = useState({
    loading: false,
    data: null,
  });
  useEffect(() => {
    console.log("entey in gome donw");
    setProducts({ loading: true, data: null });
    axios.get(url).then((res) => {
      setProducts({ loading: false, data: res.data });
    });
  }, [url]);
  if (products.loading) {
    /* <p>Lodaing..........</p> */
    content = <Loader />;
  }
  if (products.data) {
    console.log("Data", products.data);
    content = products.data.map((product, key) => (
      <ProductCard details={product} />
    ));
  }
  return (
    <div>
      <h2>BEST ARTICLES</h2>
      {content}
    </div>
  );
}

export default Home;
