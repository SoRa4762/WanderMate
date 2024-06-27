import { useState, createContext, useEffect } from "react";

//create context
export const UserContext = createContext();

//create provider
export const UserProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState({
    userId: "",
    username: "",
    profilePicture: "",
  });

  useEffect(() => {
    const username = sessionStorage.getItem("username");
    if (username) {
      setUserAuth((prevData) => ({ ...prevData, username }));
    }
  }, []);

  return (
    <UserContext.Provider value={{ userAuth, setUserAuth }}>
      {children}
    </UserContext.Provider>
  );
};
