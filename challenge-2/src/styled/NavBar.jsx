import styled from 'styled-components';

export const StyledNavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
`;

export const StyledNavButton = styled.button`
  margin: 15px; 
  padding: 10px;
  font-size: 1rem;
  border: none;
  background-color: transparent;
  border-radius: 8%;

  :hover{
      background-color: #ffd3b6;
  }
`;