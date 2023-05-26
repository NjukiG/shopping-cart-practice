import React from "react";
import { CartState } from "../context/Context";
import Filters from "./Filters";
import ProductCard from "./ProductCard";

function Home() {
  const {
    state: { products },
  } = CartState();

  console.log(products);
  return <div className="home">
    <Filters />
    <div className="productContainer">
      {products.map((product) => {
        return (
          <ProductCard product={product} key={product.id} />
        )
      })}
    </div>
  </div>;
}

export default Home;
