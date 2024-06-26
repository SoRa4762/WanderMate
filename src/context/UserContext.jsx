import { useState, createContext } from "react";

//create context
export const UserContext = createContext();

//create provider
export const UserProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState({
    userId: "",
    username: "",
    profilePicture: "",
  });

  return (
    <UserContext.Provider value={{ userAuth, setUserAuth }}>
      {children}
    </UserContext.Provider>
  );
};
