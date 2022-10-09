import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "config/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

interface UserType {
  email: string | null;
  uid: string | null;
}

interface AuthContextType {
  user: UserType;
  signup: (email, password) => void;
  login: (email, password) => void;
  logout: () => void;
}

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };

  const authContextValue: AuthContextType = {
    user,
    signup,
    login,
    logout,
  };

  return <AuthContext.Provider value={authContextValue}>{loading ? null : children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
