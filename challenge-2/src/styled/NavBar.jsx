import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
`;

export const StyledNavButton = styled.div`
  padding: 10px;
  font-size: 1rem;
  
  a{
    text-decoration: none;
  }
`;