import React from 'react';
import { StyledPageWrapper, Flex } from '../../styled/Body.styled';
import { StyledLoginBox } from '../../styled/Login.styled';

function Login() {
  return (
    <StyledPageWrapper>
      <Flex justifyContent="space-around" flexDirection="row">
        <StyledLoginBox>Loginbox</StyledLoginBox>
      </Flex>
    </StyledPageWrapper>
  );
}

export default Login;
