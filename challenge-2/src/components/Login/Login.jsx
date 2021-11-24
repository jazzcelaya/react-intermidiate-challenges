import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledPageWrapper, Flex, Button } from '../../styled/Body.styled';
import { StyledLoginBox } from '../../styled/Login.styled';
import { StyledInput } from '../../styled/NoteInput.styled';
import { login } from '../../providers/Temp';

function Login({ setAutenticated }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const refreshCredentials = () => {
    setEmail('');
    setPassword('');
  };

  const handleLogin = () => {
    const response = login(email, password);
    if (response) {
      setAutenticated(true);
      refreshCredentials();
      return navigate('/');
    }
    // eslint-disable-next-line no-alert
    return alert('Email or password is not correct.');
  };

  const handleEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handlePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  return (
    <StyledPageWrapper>
      <Flex justifyContent="space-around" flexDirection="row">
        <StyledLoginBox>
          <StyledInput value={email} placeholder="email" onChange={handleEmail} />
          <StyledInput
            value={password}
            type="password"
            placeholder="password"
            onChange={handlePassword}
          />
          <Button onClick={handleLogin}>Log in</Button>
        </StyledLoginBox>
      </Flex>
    </StyledPageWrapper>
  );
}

export default Login;
