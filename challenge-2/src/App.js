import { StyledBody, StyledPageWrapper } from './styled/Body'
import { NavBar, Notes } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router >
      <StyledBody>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/archived" element={<StyledPageWrapper>Archived</StyledPageWrapper>} />
          <Route path="/login" element={<StyledPageWrapper>Login</StyledPageWrapper>} />
        </Routes>
      </StyledBody>
    </Router>
  );
}

export default App;
