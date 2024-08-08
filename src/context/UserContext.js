import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      setUser({ username });
    }
  }, []);

  const login = (username) => {
    localStorage.setItem("username", username);
    setUser({ username });
  };

  const logout = () => {
    localStorage.removeItem("username");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
