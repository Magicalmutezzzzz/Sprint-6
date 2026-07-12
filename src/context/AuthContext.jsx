import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return localStorage.getItem("guestUser") === "true";
  });

  const loginAsGuest = () => {
    setUser(true);
    localStorage.setItem("guestUser", "true");
  };

  const logout = () => {
    setUser(false);
    localStorage.removeItem("guestUser");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loginAsGuest,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};