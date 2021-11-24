import React from 'react';

const AuthContext = React.createContext({
  authenticated: false,
  setAutenticated: {},
});

export default AuthContext;
