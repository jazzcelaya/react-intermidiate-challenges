import React, { useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StyledBody, StyledPageWrapper } from './styled/Body.styled';
import { NavBar, Notes, Archive } from './components';

function reducer(notes, action) {
  switch (action.type) {
    case 'set': {
      const setNotes = action.payload ? action.payload : [];
      return setNotes;
    }
    case 'add':
      localStorage.setItem('notes', JSON.stringify([...notes, action.payload]));
      return [...notes, action.payload];
    case 'archive': {
      const updatedNotes = notes.map((note) => {
        if (note.id === action.payload.id) {
          return { ...note, isArchived: !note.isArchived };
        }
        return note;
      });
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
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

  useEffect(() => {
    const localStorageNotes = localStorage.getItem('notes');
    dispatch({ type: 'set', payload: JSON.parse(localStorageNotes) });
  }, []);

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
