import React from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { StyledNavBar, StyledNavButton } from '../../styled/NavBar.styled';

function NavBar() {
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
    </StyledNavBar>
  );
}

export default NavBar;
