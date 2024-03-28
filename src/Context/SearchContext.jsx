import { createContext, useState } from "react";
import ecommData from "../ProductData/ProductData";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchData, setSerachData] = useState("");

  const [productData, setProductData] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSerachData(value);

    if (value === "") {
      setProductData([]);
    }
  };

  const handleSearch = () => {
    const searchProduct = ecommData.filter(
      (ele) =>
        ele.type.toLowerCase().includes(searchData.toLowerCase()) ||
        ele.brand.toLowerCase().includes(searchData.toLowerCase())
    );
    setProductData(searchProduct);
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <SearchContext.Provider
      value={{
        productData,
        setProductData,
        searchData,
        setSerachData,
        handleChange,
        handleSearch,
        handleEnterKey,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
