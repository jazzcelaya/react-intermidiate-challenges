import React from 'react';

const AuthContext = React.createContext({
  authenticated: false,
  userName: '',
});

export default AuthContext;
