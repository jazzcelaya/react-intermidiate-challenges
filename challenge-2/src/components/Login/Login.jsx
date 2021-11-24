import React from 'react';
import { StyledPageWrapper, Flex, Button } from '../../styled/Body.styled';
import { StyledLoginBox } from '../../styled/Login.styled';
import { StyledInput } from '../../styled/NoteInput.styled';

function Login() {
  return (
    <StyledPageWrapper>
      <Flex justifyContent="space-around" flexDirection="row">
        <StyledLoginBox>
          <StyledInput placeholder="email" />
          <StyledInput type="password" placeholder="password" />
          <Button>Log in</Button>
        </StyledLoginBox>
      </Flex>
    </StyledPageWrapper>
  );
}

export default Login;
