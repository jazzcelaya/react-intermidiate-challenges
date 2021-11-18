import React from 'react';

const GlobalContext = React.createContext({
  notes: [],
  archive: [],
});

export default GlobalContext;
