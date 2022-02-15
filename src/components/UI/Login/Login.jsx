import React from 'react';
import {
  Container,
  Question,
  StyledInput,
  StyledLabel,
  StyledButton,
  LoginCard,
  ErrorMessage
} from './Login.styles';
import { useForm } from 'react-hook-form';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <Container>
      <LoginCard>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Question className="question">
            <StyledInput type="text" {...register('login', { required: true })} />
            <StyledLabel>Login</StyledLabel>
            {errors.login && <ErrorMessage>This field is required</ErrorMessage>}
          </Question>
          <Question className="question">
            <StyledInput type="password" {...register('password', { required: true })} />
            <StyledLabel>Password</StyledLabel>
            {errors.password && <ErrorMessage>This field is required</ErrorMessage>}
          </Question>
          <StyledButton>Submit</StyledButton>
        </form>
      </LoginCard>
    </Container>
  );
};

export default Login;
