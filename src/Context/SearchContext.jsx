import { createContext, useState } from "react";
import ecommData from "../ProductData/ProductData";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [productData, setProductData] = useState(ecommData);
  return (
    <SearchContext.Provider value={{ productData, setProductData }}>
      {children}
    </SearchContext.Provider>
  );
};
