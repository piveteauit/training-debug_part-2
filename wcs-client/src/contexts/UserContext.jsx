import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export function UserContextProvider ({ children }) {
  const [user, setUser] = useState(JSON.stringify(localStorage.getItem('user')));

  const storeUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
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
