import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledPageWrapper, Flex, Button } from '../../styled/Body.styled';
import { StyledLoginBox } from '../../styled/Login.styled';
import { StyledInput } from '../../styled/NoteInput.styled';
import { login } from '../../providers/Temp';

function Login({ setAutenticated, authenticated }) {
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
      localStorage.setItem('auth', true);
      refreshCredentials();
      return navigate('/');
    }
    // eslint-disable-next-line no-alert
    return alert('Email or password is not correct.');
  };

  const handleLogout = () => {
    setAutenticated(false);
    localStorage.setItem('auth', false);
    return navigate('/');
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
    <StyledPageWrapper data-testid="login">
      <Flex justifyContent="space-around" flexDirection="row">
        <StyledLoginBox>
          {authenticated ? (
            <Flex flexDirection="column">
              <div>You are Logged In!</div>
              <Button onClick={handleLogout} data-testid="login-button">
                Log out
              </Button>
            </Flex>
          ) : (
            <>
              <StyledInput
                data-testid="email-input"
                value={email}
                placeholder="email"
                onChange={handleEmail}
              />
              <StyledInput
                data-testid="password-input"
                value={password}
                type="password"
                placeholder="password"
                onChange={handlePassword}
              />
              <Button onClick={handleLogin} data-testid="login-button">
                Log in
              </Button>
            </>
          )}
        </StyledLoginBox>
      </Flex>
    </StyledPageWrapper>
  );
}

export default Login;
