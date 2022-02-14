import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginCard = styled.div`
  background-color: red;
`;
const Login = () => {
  return (
    <Container>
      <LoginCard>Login</LoginCard>
    </Container>
  );
};

export default Login;
