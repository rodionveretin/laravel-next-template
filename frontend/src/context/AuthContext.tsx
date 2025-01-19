import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
 user: null,
 token: null,
 login: async (provider: string) => {},
 logout: async () => {},
});

import { ReactNode } from 'react';

interface AuthProviderProps {
 children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
 const [user, setUser] = useState(null);
 const [token, setToken] = useState(null);

 const login = async (provider: string) => {
  const response = await fetch(`/auth/${provider}/redirect`, {
   credentials: 'include',
  });
  if (response.ok) {
   const { token, user } = await response.json();
   setToken(token);
   setUser(user);
  }
 };

 const logout = async () => {
  await fetch('/logout', { method: 'POST', credentials: 'include' });
  setUser(null);
  setToken(null);
 };

 return (
  <AuthContext.Provider value={{ user, token, login, logout }}>
   {children}
  </AuthContext.Provider>
 );
};

export const useAuth = () => useContext(AuthContext);
