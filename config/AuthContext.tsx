import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "config/firebase";

interface UserType {
  email: string | null;
  uid: string | null;
}

interface AuthContextType {
  user: UserType;
}

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {}, []);

  const authContextValue: AuthContextType = {
    user,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
