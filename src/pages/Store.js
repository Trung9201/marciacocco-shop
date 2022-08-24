import React from "react";
import Banner from "../components/Banner/Banner";
import Products from "../components/Products/Products";

const Store = () => {
  return (
    <div className="store">
      <Banner src="/images/banner-4.png" alt="banner-store" title="Store" />
      <Products />
    </div>
  );
};

export default Store;
