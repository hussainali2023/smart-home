import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const ProductContext = createContext([]);
const Root = () => {
  const product = useLoaderData();
  return (
    <ProductContext.Provider value={product}>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </ProductContext.Provider>
  );
};

export default Root;
