import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/about" />
      <Route path="/feedback" />
      <Route path="/product" />
      <Route path="/login" />
      <Route path="/cart" />
      <Route path="/profile" />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoutes;
