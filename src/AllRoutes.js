import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import LoginPage from "./Pages/LoginPage";
import DataDisplay from "./DataDisplay/DataDisplay";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DataDisplay />} />
      <Route path="/about" />
      <Route path="/feedback" />
      <Route path="/product" />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cart" />
      <Route path="/profile" />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoutes;
