import { createContext, useState } from "react";
import { productsArray, getProductData } from "./productsStore";

// create CartContext object/hook here first.
//after that create contextValue function and individual function for each objects inside this contextValue.
export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  //{id: 1, quantity: 2}

  const getProductQuantity = (id) => {
    // find total product quantities first.

    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  };

  const addOneToCart = (id) => {
    // add new one to cart.
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      //product is not in the cart.
      setCartProducts([...cartProducts, { id: id, quantity: 1 }]);
    } else {
      //product is in the cart.
      //[...{id: 1, quantity: 3}, { id: 2 , quantity: 1 }] , we wanna add product id: 2.
      setCartProducts(
        cartProducts.map(
          (product) =>
            product.id === id // if condition
              ? { ...product, qauntity: product.quantity + 1 } // if statement is true.
              : product // if statement is false.
        )
      );
    }
  };

  const deleteFromCart = (id) => {
    // filter: [] if an obj meet a condition , then add obj to [].
    // [p1, p2, p3] => [p1, p3] if there is no id for product 2.
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id !== id;
      })
    );
  };

  const removeOneFromCart = (id) => {
    const quantity = getProductQuantity(id);
    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map(
          (product) =>
            product.id === id // if condition
              ? { ...product, qauntity: product.quantity - 1 } // if statement is true.
              : product // if statement is false.
        )
      );
    }
  };

  const getTotalCost = () => {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = getProductData(cartItem.id);
      totalCost += productData.price * cartItem.quantity;
    });
    return totalCost;
  };

  // declare contextValue function
  //and after that create individual function for each objects..

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;

//Code down here.
// Context(cart, addToCart, removeCart)
//Provider -> gives our React app access to all the things in our context.
