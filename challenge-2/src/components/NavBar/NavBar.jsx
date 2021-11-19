import React from 'react';
import { BiUserCircle, BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { StyledNavBar, StyledNavButton, StyledSearch } from '../../styled/NavBar.styled';
import { StyledInput } from '../../styled/NoteInput.styled';

function NavBar({ dispatch }) {
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const keywords = e.target.value;
      dispatch({ type: 'search', payload: keywords });
    }
  };
  return (
    <StyledNavBar>
      <Link to="/login">
        <StyledNavButton>
          <BiUserCircle />
        </StyledNavButton>
      </Link>
      <Link to="/">
        <StyledNavButton>Notes</StyledNavButton>
      </Link>
      <Link to="/archived">
        <StyledNavButton>Archived</StyledNavButton>
      </Link>
      <StyledSearch>
        <BiSearch />
        <StyledInput placeholder="search" onKeyPress={handleSearch} />
      </StyledSearch>
    </StyledNavBar>
  );
}

export default NavBar;
