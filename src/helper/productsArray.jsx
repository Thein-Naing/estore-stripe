//coffee : price_1NHhY9HpTTELhGYNqJko5s5l
//Sunglesses : price_1NHhbqHpTTELhGYNGYTVa2DF
//Camera :price_1NHhd2HpTTELhGYNWOiZig6S
const productsArray = [
  {
      id: " price_1NHhY9HpTTELhGYNqJko5s5l",
      title: "Coffee",
      price: 4.99
  },
  {
      id: "price_1NHhbqHpTTELhGYNGYTVa2DF",
      title: "Sunglasses",
      price: 9.99
  },
  {
      id: "price_1NHhd2HpTTELhGYNWOiZig6S",
      title: "Camera",
      price: 39.99
  }
];

const getProductData =(id) => {
  let productData = productsArray.find(product => product.id === id);

  if (productData === undefined) {
      console.log("Product data does not exist for ID: " + id);
      return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
