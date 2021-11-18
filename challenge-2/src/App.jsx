import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StyledBody, StyledPageWrapper } from './styled/Body';
import { NavBar, Notes, Archive } from './components';

function reducer(notes, action) {
  switch (action.type) {
    case 'add':
      console.log([...notes, action.payload]);
      return [...notes, action.payload];
    case 'archive': {
      console.log('archived called from dispatch');
      const updatedNotes = notes.map((note) => {
        if (note.id === action.payload.id) {
          console.log(note);
          return { ...note, isArchived: !note.isArchived };
        }
        return note;
      });
      return updatedNotes;
    }
    default:
      return notes;
  }
}

function App() {
  const [notes, dispatch] = useReducer(reducer, []);
  const activeNotes = notes.filter((note) => !note.isArchived);
  const archivedNotes = notes.filter((note) => note.isArchived);

  return (
    <Router>
      <StyledBody>
        <NavBar />
        <Routes>
          <Route path="/" element={<Notes notes={activeNotes} dispatch={dispatch} />} />
          <Route
            path="/archived"
            element={<Archive notes={archivedNotes} dispatch={dispatch} />}
          />
          <Route path="/login" element={<StyledPageWrapper>Login</StyledPageWrapper>} />
        </Routes>
      </StyledBody>
    </Router>
  );
}

export default App;
