import { createContext, useContext, useState } from "react";
import { httpService } from "../services";

/**
 * 
 * @date 26/06/2023 - 20:27:29
 *
 * @type {*}
 */
const CartContext = createContext();

/**
 * 
 * @date 26/06/2023 - 20:27:18
 *
 * @returns {*}
 */
export const useCart = () => useContext(CartContext);

/**
 * 
 * @date 26/06/2023 - 20:27:06
 *
 * @export
 * @param {{ children: any; }} { children }
 * @returns {*}
 */
export function  CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  /**
   * 
   * @date 26/06/2023 - 20:28:56
   *
   * @async
   * @param {*} newCart
   * @returns {*}
   */
  const updateCart = async (newCart) => {
    setCart(newCart)
  }
  
  /**
   * 
   * @date 26/06/2023 - 20:29:00
   *
   * @async
   * @param {*} product_id
   * @returns {*}
   */
  const addToCart = async(product_id) => {
    let newCart = [...cart];

    if (!cart.some(c => c.product_id === product_id)) newCart.push({product_id, quantity: 1});
    else 
      newCart = cart.map((c) => ({
        ...c,
        product_id: c.product_id,
        quantity: Number(c.quantity || 0) + Number(c.product_id === product_id)
      }));

    updateCart(newCart)
  };
  
  /**
   * 
   * @date 26/06/2023 - 20:29:07
   *
   * @async
   * @param {*} product_id
   * @returns {*}
   */
  const removeToCart = async(product_id) => {
    let newCart = [...cart];

    if (!cart.some(c => c.product_id === product_id)) newCart.push({product_id, quantity: 1});
    else 
      newCart = cart.map((c) => ({
        ...c,
        product_id: c.product_id,
        quantity: Number(c.quantity || 0) - Number(c.product_id === product_id)
      }));
 
    updateCart(newCart)
  };

  /**
   * 
   * @date 26/06/2023 - 20:29:13
   *
   * @param {*} products
   * @returns {*}
   */
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

  const saveCart = ({product_id, quantity}, user_id, cart_id) => {
    if (!user_id) return;

    if (!cart_id) return httpService.create(`users/${user_id}/carts`, {product_id, quantity, user_id});
    
    return httpService.update(`users/${user_id}/carts/${cart_id}`, {quantity});
  }

  return (
    <CartContext.Provider
      value={{cart, updateCart, addToCart, removeToCart, getInCartProducts, setCart, saveCart}}
    >
      {children}
    </CartContext.Provider>
  );
};
