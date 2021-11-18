import styled from 'styled-components';

export const StyledNoteCard = styled.div`
  flex-wrap: wrap;
  border: 5px solid transparent;
  background-color: #ffd3b6;
  margin: 15px;
  color: #313639;
  border-radius: 10px;
  flex: 1;
`;

export const StyledColorCircle = styled.div`
  background-color: ${(props) => props.color};
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
  margin: 10px;
  box-shadow: 1px 1px 3px gray;
`;
