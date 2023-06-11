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

  const getProductQuantity = (id) => { // find total product quantities first.

    const quantity = cartProducts.find(product => product.id === id)?.quantity;
      if (quantity === undefined ) {
        return 0;
      }
      return quantity;
};

  const addOneToCart = (id) => { // add new one to cart.
    const quantity = getProductQuantity(id);
    if (quantity === 0) { //product is not in the cart.
      setCartProducts(
        [...cartProducts, { id: id, quantity: 1}]
      )
    } else { //product is in the cart.
    //[...{id: 1, quantity: 3}, { id: 2 , quantity: 1 }] , we wanna add product id: 2.
      setCartProducts(
        cartProducts.map( product=>
          product.id === id ? // if condition
          {...product, qauntity: product.quantity + 1} // if statement is true.
          : product // if statement is false.
        )
      )
    }

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
