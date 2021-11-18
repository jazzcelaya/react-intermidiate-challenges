import styled from 'styled-components';

export const StyledBody = styled.div`
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  font-size: calc(10px + 2vmin);
  color: #313639;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;

export const StyledPageWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  min-height: 90vh;
  margin: 0;
  padding: 0;
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: ${(props) => props.justifyContent};
  flex-direction: ${(props) => props.flexDirection};
`;
export const Button = styled.button`
  border: none;
  display: inline-block;
  padding: 10px;
  margin: 5px;
  border-radius: 8px;
  background-color: #ffaaa5;
  text-align: center;
  box-shadow: 1px 1px 3px gray;
  cursor: pointer;
`;
