import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext({});

function provideUserIfAlreadyLoggedIn(setUser, userInfoProvided) {
  if (setUser && !userInfoProvided) {
    const userInfo = JSON.parse(localStorage.getItem("dataKey"));
    if (userInfo) {
      setUser(userInfo);
    }
  }
}

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const [ready , setReady] =useState(false)
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  provideUserIfAlreadyLoggedIn(setUser, user);
  return (
    <UserContext.Provider
      value={{ user, setUser, isLoggedIn, provideUserIfAlreadyLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
};
