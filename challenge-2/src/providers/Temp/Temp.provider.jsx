const mockedUser = {
  id: '123',
  name: 'Wizeline',
  email: 'test@wizeline.com',
  password: 'wizeline123',
  avatarUrl:
    'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
};

export function login(email, password) {
  if (email === mockedUser.email && password === mockedUser.password) {
    return true;
  }
  return false;
}
