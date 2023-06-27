import { createContext, useContext, useState } from "react";

/**
 * 
 * @date 26/06/2023 - 20:27:43
 *
 * @type {*}
 */
const ProductContext = createContext();

/**
 * 
 * @date 26/06/2023 - 20:27:39
 *
 * @returns {*}
 */
export const useProduct = () => useContext(ProductContext);

/**
 * 
 * @date 26/06/2023 - 20:27:36
 *
 * @export
 * @param {{ children: any; }} { children }
 * @returns {*}
 */
export function  ProductContextProvider({ children }) {
  const [product, setProduct] = useState([]);
  return (
    <ProductContext.Provider
      value={[product, setProduct]}
    >
      {children}
    </ProductContext.Provider>
  );
};
