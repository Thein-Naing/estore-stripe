import { createContext, useState } from "react";
import { productsArray, getProductData } from "./productsStore";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export const CartProvider = ({ children }) => {
  const[cartProducts, setCartProducts] = useStae([]);
  //{id: 1, quantity: 2}

  const getProductQuantity = (id) => {

    const quantity = cartProducts.find(product => product.id === id)?.quantity;
      if (quantity === undefined ) {
        return 0;
      }
      return quantity;
};

  const addOneToCart = () => {

  };

  const removeOneFromCart = () => {

  };

  const deleteFromCart = () => {

  };

  const getTotalCost = () => {

  };






  const contextValue = {
  items: cartProducts,
  getProductQuantity,
  addOneToCart ,
  removeOneFromCart,
  deleteFromCart,
  getTotalCost,

}

return (
  <CartContext.Provider
  value={contextValue}

  >{children}</CartContext.Provider>
);

}
