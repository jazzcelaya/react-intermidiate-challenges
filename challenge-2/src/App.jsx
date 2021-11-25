import React, { useReducer, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { StyledBody } from './styled/Body.styled';
import { NavBar, Notes, Archive, Login } from './components';
import AuthProvider from './providers/Auth';
// import AuthContext from './state/AuthContext';

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
    case 'edit': {
      const updatedNotes = notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      });
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      return updatedNotes;
    }
    case 'search': {
      const keywords = action.payload;
      const allNotes = JSON.parse(localStorage.getItem('notes'));
      if (keywords === '') {
        return allNotes;
      }
      const result = allNotes.filter((note) => {
        const title = note.title ? note.title : '';
        const body = note.body ? note.body : '';

        if (title.includes(keywords) || body.includes(keywords)) {
          return note;
        }
      });
      return result;
    }
    default:
      return notes;
  }
}

function App() {
  const [notes, dispatch] = useReducer(reducer, []);
  const activeNotes = notes.filter((note) => !note.isArchived);
  const archivedNotes = notes.filter((note) => note.isArchived);
  const [authenticated, setAutenticated] = useState(false);

  useEffect(() => {
    const localStorageNotes = localStorage.getItem('notes');
    const localAuth = localStorage.getItem('auth');
    dispatch({ type: 'set', payload: JSON.parse(localStorageNotes) });
    setAutenticated(localAuth);
  }, []);

  return (
    <AuthProvider value={{ authenticated }}>
      <BrowserRouter>
        <StyledBody data-testid="app">
          <NavBar dispatch={dispatch} />
          <Routes>
            <Route
              path="/"
              element={
                authenticated ? (
                  <Notes notes={activeNotes} dispatch={dispatch} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/archived"
              element={
                authenticated ? (
                  <Archive notes={archivedNotes} dispatch={dispatch} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/login"
              element={
                <Login setAutenticated={setAutenticated} authenticated={authenticated} />
              }
            />
          </Routes>
        </StyledBody>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
