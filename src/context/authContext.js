import { createContext, useState } from "react";

const AuthContext = createContext();

const initialAuth = null;

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialAuth);
   const [nameUser, setNameUser] = useState(initialAuth);
   const [nameRole, setNameRole] = useState(initialAuth);
  const handleAuth = (e, user, role) => {
    if (auth) {
      setAuth(null);
      setNameUser(null);
      setNameRole(null);
    } else {
      setAuth(true);
      setNameUser(user);
      setNameRole(role);
    }
  };

  const data = { auth, handleAuth, nameUser, nameRole};

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;