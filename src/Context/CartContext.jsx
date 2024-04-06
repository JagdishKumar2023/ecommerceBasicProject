import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (ele) => {
    const existingItem = cart.find((item) => item.id === ele.id);
    // console.log(existingItem);

    if (existingItem) {
      // when item already present in the cart
      let updatedCart = cart.map((cartItem) => {
        // console.log(cartItem);
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
      // when first time added in the  cart
      setCart([...cart, { ...ele, quantity: 1 }]);
    }

    // prompt("item add to the cart");
  };

  // increment quantity:-
  let increaseCartQuantity = (id) => {
    // console.log(id);
    let updatedCart = cart.map((ele) => {
      if (ele.id === id) {
        // console.log(ele.id);
        return {
          ...ele,
          quantity: ele.quantity + 1,
        };
      }
      return ele;
    });
    setCart(updatedCart);
  };

  let dereaseCartQuantity = (id) => {
    let updatedCart = cart
      .map((ele) => {
        if (ele.id === id) {
          return {
            ...ele,
            quantity: ele.quantity - 1,
          };
        }
        return ele;
      })
      .filter((ele) => ele.quantity > 0);

    setCart(updatedCart);
  };

  // total items:-
  let totalItems = cart.reduce((total, ele) => {
    return total + ele.quantity;
  }, 0);

  // total price:-
  let totalPrice = cart.reduce((total, ele) => {
    return total + ele.quantity * ele.price;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        totalItems,
        totalPrice,
        increaseCartQuantity,
        dereaseCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
