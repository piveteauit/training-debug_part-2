import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);

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
