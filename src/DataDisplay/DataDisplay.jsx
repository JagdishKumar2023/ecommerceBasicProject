import React, { useContext } from "react";
import ecommData from "../ProductData/ProductData";
import "./DataDisplay.css";
import { SearchContext } from "../Context/SearchContext";
import { CartContext } from "../Context/CartContext";

const DataDisplay = () => {
  const { productData } = useContext(SearchContext);

  const { cart, addToCart } = useContext(CartContext);

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
                    <button
                      className="addToCartBtn"
                      onClick={() => addToCart(ele)}
                    >
                      ADD TO CART
                    </button>
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
                    <button
                      className="addToCartBtn"
                      onClick={() => addToCart(ele)}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </>
              </div>
            );
          })}
    </div>
  );
};

export default DataDisplay;
