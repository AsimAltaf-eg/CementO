import React from "react";

import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import ProductCategory from "./HomePageProductCategories"
import "bootstrap/dist/css/bootstrap.min.css";
const Home = () => {
  return (
    <div className="home">
      
      <ProductCategory />
     
    </div>
  );
};

export default Home;
