import React, { useContext } from "react";
import ecommData from "../ProductData/ProductData";
import "./DataDisplay.css";
import { SearchContext } from "../Context/SearchContext";

const DataDisplay = () => {
  const { productData } = useContext(SearchContext);
  return (
    <div className="displayContaine">
      {productData.length > 0
        ? productData.map((ele, index) => {
            return (
              <div key={index} className="displayMainContainer">
                <>
                  <div className="containerAllItems">
                    <img src={ele.image} alt="" className="imageTag" />
                    <h4 className="brandforSale">{ele.brand}</h4>
                    <p className="priceofProduct">₹{ele.price}</p>
                    <button className="addToCartBtn">ADD TO CART</button>
                  </div>
                </>
              </div>
            );
          })
        : ecommData.map((ele, index) => {
            return (
              <div key={index} className="displayMainContainer">
                <>
                  <div className="containerAllItems">
                    <img src={ele.image} alt="" className="imageTag" />
                    <h4 className="brandforSale">{ele.brand}</h4>
                    <p className="priceofProduct">₹{ele.price}</p>
                    <button className="addToCartBtn">ADD TO CART</button>
                  </div>
                </>
              </div>
            );
          })}
    </div>
  );
};

export default DataDisplay;
