import { StyledBody } from './styled/Body'
import { NavBar, Notes } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router >
      <StyledBody>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/archived" element={<div>Archived</div>} />
          <Route path="/login" element={<div>Login</div>} />
        </Routes>
      </StyledBody>
    </Router>
  );
}

export default App;
