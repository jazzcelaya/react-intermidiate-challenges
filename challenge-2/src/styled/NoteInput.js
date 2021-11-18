import styled from 'styled-components';

export const StyledNoteWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  background-color: ${(props) => props.background};
  padding: 10px;
  margin: 10px;
  flex-direction: column;
  align-items: initial;
  border-radius: 5px;
  justify-content: flex-start;
  box-shadow: 1px 1px 3px gray;
  width: 80%;

  textarea {
    border: none;
    background-color: transparent;
  }

  textarea:focus {
    outline: none;
    min-height: 4rem;
  }
`;

export const StyledInput = styled.input`
  padding: 0.3rem;
  border: none;
  text-align: left;
  background-color: transparent;

  :focus {
    outline: none;
  }
`;
