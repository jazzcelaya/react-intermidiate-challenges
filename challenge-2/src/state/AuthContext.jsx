import React from 'react';

const AuthContext = React.createContext({
  userName: '',
  userEmail: '',
});

export default AuthContext;
