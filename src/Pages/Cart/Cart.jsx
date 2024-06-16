import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./Cart.css";

const Cart = () => {
  const {
    cart,
    totalItems,
    totalPrice,
    increaseCartQuantity,
    dereaseCartQuantity,
  } = useContext(CartContext);
  //   console.log(cart);

  return (
    <div className="mainContainerCartPage">
      <div>Items - {totalItems}</div>
      <div>Total - {totalPrice}</div>
      {cart.length > 0
        ? cart.map((ele) => (
            <div key={ele.id}>
              <div className="containerAllItems">
                <img src={ele.image} alt="" className="imageTag" />
                <h4 className="brandforSale">{ele.brand}</h4>
                <p className="priceofProduct">₹{ele.price}</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <button onClick={() => dereaseCartQuantity(ele.id)}>-</button>
                  <p>{ele.quantity}</p>
                  <button onClick={() => increaseCartQuantity(ele.id)}>
                    +
                  </button>
                </div>
              </div>
            </div>
          ))
        : "No item in cart"}
    </div>
  );
};

export default Cart;
