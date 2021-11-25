import styled from 'styled-components';

export const StyledLoginBox = styled.div`
  display: flex;
  padding: 10px;
  margin: 10px;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  justify-content: flex-start;
  box-shadow: 1px 1px 3px gray;
  width: 40%;
  max-width: 30rem;

  input {
    padding: 0.3rem;
    margin: 0.3rem;
    border: none;
    text-align: center;
    font-size: 1rem;
    background-color: transparent;
  }

  input:focus {
    outline: none;
  }
`;
