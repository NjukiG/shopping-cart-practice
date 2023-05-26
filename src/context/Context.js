import React, { createContext, useContext, useReducer } from "react";
import faker from "faker";
import { cartReducer } from "./Reducers";

const CartContext = createContext();

function Context({ children }) {
  const products = [...Array(30)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  console.log(products);
  return (
    <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
  );
}

export const CartState = ()=>{
    return useContext(CartContext)
}

export default Context;

