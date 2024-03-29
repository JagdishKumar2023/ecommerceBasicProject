import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
// import "./Cart.css";

const Cart = () => {
  const { cart } = useContext(CartContext);
  //   console.log(cart);
  return (
    <div className="mainContainerCartPage">
      {cart.length > 0
        ? cart.map((ele) => (
            <div key={ele.id}>
              <div className="containerAllItems">
                <img src={ele.image} alt="" className="imageTag" />
                <h4 className="brandforSale">{ele.brand}</h4>
                <p className="priceofProduct">₹{ele.price}</p>
              </div>
            </div>
          ))
        : "No item in cart"}
    </div>
  );
};

export default Cart;
