import styled from 'styled-components';

export const StyledNavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  margin: 15px;
`;

export const StyledNavButton = styled.button`
  margin: 10px;
  padding: 5px;
  font-size: 1rem;
  border: none;
  background-color: transparent;
  border-radius: 8%;

  :hover {
    background-color: #ffd3b6;
  }
`;

export const StyledSearch = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  margin: 10px;
  flex-direction: row;
  align-items: initial;
  border-radius: 5px;
  justify-content: flex-start;
  box-shadow: 1px 1px 3px gray;
  width: 100%;
  max-width: 30rem;

  input {
    padding: 0.3rem;
    border: none;
    text-align: left;
    background-color: transparent;
  }

  input:focus {
    outline: none;
  }
`;
