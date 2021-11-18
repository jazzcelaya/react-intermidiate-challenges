import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StyledBody, StyledPageWrapper } from './styled/Body';
import { NavBar, Notes, Archive } from './components';

function App() {
  return (
    <Router>
      <StyledBody>
        <NavBar />
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/archived" element={<Archive />} />
          <Route path="/login" element={<StyledPageWrapper>Login</StyledPageWrapper>} />
        </Routes>
      </StyledBody>
    </Router>
  );
}

export default App;
