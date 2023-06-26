import { createContext, useContext, useState } from "react";
import storageService from "../services/storageService";

/**
 * 
 * @date 26/06/2023 - 20:27:48
 *
 * @type {*}
 */
const UserContext = createContext();

/**
 * 
 * @date 26/06/2023 - 20:27:50
 *
 * @returns {*}
 */
export const useUser = () => useContext(UserContext);

/**
 * 
 * @date 26/06/2023 - 20:27:53
 *
 * @export
 * @param {{ children: any; }} { children }
 * @returns {*}
 */
export function UserContextProvider ({ children }) {
  const [user, setUser] = useState(storageService.getItem('user'));

  /**
   * 
   * @date 26/06/2023 - 20:29:29
   *
   * @param {*} user
   */
  const storeUser = (user) => {
    storageService.setItem('user', user);
    setUser(user)
  };

  return (
    <UserContext.Provider
      value={{ user, setUser: storeUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
