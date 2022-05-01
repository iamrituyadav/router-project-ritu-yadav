import { Children, createContext } from "react";
export const CartContext = createContext();
import { useState } from "react";

export const CartContextProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  const handleClick = (value) => {
    setCartData([...cartData, value]);
  };

  return (
    <CartContext.Provider value={{ cartData, handleClick }}>
      {children}
    </CartContext.Provider>
  );
};
