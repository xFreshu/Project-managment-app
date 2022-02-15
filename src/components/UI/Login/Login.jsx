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
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Login = ({ setUserData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = (data) => {
    if (data.login === 'projectManager') {
      data['role'] = 'PM';
      console.log(data);
    } else if (data.login === 'developer') {
      data['role'] = 'developer';
    }
    setUserData(data);
    history('/dashboard');
    reset();
  };

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
Login.propTypes = {
  setUserData: PropTypes.func
};
export default Login;
