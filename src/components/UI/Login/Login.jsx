import React, { useContext, useEffect } from 'react';
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
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../providers/AppProvider';

const Login = () => {
  const { userData, setUserData } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = (data) => {
    if (data.login === 'pm') {
      data['role'] = 'PM';
      console.log(data);
    } else if (data.login === 'developer') {
      data['role'] = 'developer';
    } else if (data.login === 'client') {
      data['role'] = 'client';
    } else if (data.login === 'tester') {
      data['role'] = 'tester';
    }
    setUserData(data);
    history('/dashboard');
    reset();
  };
  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(userData));
  }, [userData]);
  const history = useNavigate();

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
