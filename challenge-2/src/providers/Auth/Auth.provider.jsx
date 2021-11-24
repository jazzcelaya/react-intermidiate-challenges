import React, { useEffect, useState, useCallback, useContext } from 'react';
import { AUTH_STORAGE_KEY } from '../../utils/constants';
// import AuthContext from '../../state/AuthContext';

const AuthContext = React.createContext(null);

const mockedUser = {
  id: '123',
  name: 'Wizeline',
  avatarUrl:
    'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const lastAuthState = localStorage.getItem(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);
    setAuthenticated(isAuthenticated);
  }, []);

  const login = useCallback(() => {
    setAuthenticated(true);
    localStorage.setItem(AUTH_STORAGE_KEY, true);
    setUser(mockedUser);
  }, []);

  const logout = useCallback(() => {
    setAuthenticated(false);
    setUser({});
    localStorage.setItem(AUTH_STORAGE_KEY, false);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
