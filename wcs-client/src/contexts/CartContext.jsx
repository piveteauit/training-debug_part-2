import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function  CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const updateCart = async (newCart) => {
    
    setCart(newCart)
  }

  const addToCart = async(product_id) => {
    let newCart = [...cart];

    if (!cart.some(c => c.product_id === product_id)) newCart.push({product_id, quantity: 1});
    else 
      newCart = cart.map((c) => ({
        product_id: c.product_id,
        quantity: Number(c.quantity || 0) + Number(c.product_id === product_id)
      }));
 
    updateCart(newCart)
  };

  const removeToCart = async(product_id) => {
    let newCart = [...cart];

    if (!cart.some(c => c.product_id === product_id)) newCart.push({product_id, quantity: 1});
    else 
      newCart = cart.map((c) => ({
        product_id: c.product_id,
        quantity: Number(c.quantity || 0) - Number(c.product_id === product_id)
      }));
 
    updateCart(newCart)
  };

  const getInCartProducts = (products) => cart
    .reduce((acc, cur) => {
      const cartIndex = acc.indexOf(acc.find((cart) => cur.product_id === cart.product_id));
      if (!~cartIndex) {
        const product = products.find((p) => p.id === cur.product_id);
        return [
          ...acc,
          {...product, ...cur}
        ];
      }

      acc[cartIndex] = {
        ...acc[cartIndex],
        quantity: acc[cartIndex] + cur.quantity,
      }
      return acc;
    }, []);

  return (
    <CartContext.Provider
      value={{cart, updateCart, addToCart, removeToCart, getInCartProducts, setCart}}
    >
      {children}
    </CartContext.Provider>
  );
};
