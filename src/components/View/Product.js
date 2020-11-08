import React, { useState, useEffect } from "react";
function Product(props) {
  const url = "https://5fa78e549def160016adaefd.mockapi.io/";
  const [product, setProduct] = useState("");

  return (
    <div>
      <p>This is Product</p>
    </div>
  );
}

export default Product;
