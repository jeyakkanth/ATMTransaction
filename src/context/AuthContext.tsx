import React, { createContext, useContext, useState } from "react";

type User = {
  cardNumber: number;
  pin: number;
};

export type AuthContextType = {
  user: User | null;
  login: (cardNumber: number, pin: number) => void;
  logout: () => void;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (cardNumber: number, pin: number) => {
    setUser({ cardNumber, pin });
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated =
    user !== null && user.cardNumber !== 0 && user.pin !== 0;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};