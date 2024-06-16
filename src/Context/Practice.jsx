import React, { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (ele) => {
    const exisitingItem = cart.find((item) => item.id === ele.id);

    if (exisitingItem) {
      var updatedCart = cart.map((cartItem) => {
        if (cartItem.id === ele.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }
        return cartItem;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...ele, quantity: 1 }]);
    }
  };

  const incrementCartQuantity = (id) => {
    let updatedCart = cart.map((ele) => {
      if (ele.id === id) {
        return {
          ...ele,
          quantity: ele.quantity + 1,
        };
      }
      return ele;
    });
    setCart(updatedCart);
  };

  const decrement = (id) => {
    let updatedCart = cart.map((ele) => {
      if (ele.id === id) {
        return {
          ...ele,
          quantity: ele.quantity - 1,
        };
      }
    });
    setCart(updatedCart);
  };

  let totalItems = cart.reduce((total, ele) => {
    return total + ele.quantity;
  }, 0);

  let totalPrice = cart.reduce((ele) => {
    return total + ele.quantity * ele.price;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        addToCart,
        incrementCartQuantity,
        decrement,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
