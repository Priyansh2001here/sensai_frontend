import { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));


  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  const updateUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const handleLogOut = () => {
      console.log(user)
    if(!user){
      return;
    }
    localStorage.clear();
    setUser(null);
    setIsLoggedIn(false);
  };

  const state = {
    user,
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isLoggedIn: state.isLoggedIn,
        setIsLoggedIn: state.setIsLoggedIn,
        updateUser,
        handleLogOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
