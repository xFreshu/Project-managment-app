import React from 'react';
import Navigation from '../../components/UI/Navigation/Navigation';
import {
  Container,
  ErrorMessage,
  LoginCard,
  Question,
  StyledButton,
  StyledInput,
  StyledLabel
} from '../../components/UI/Login/Login.styles';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const TicketCard = styled(LoginCard)`
  display: flex;
`;
const TicketForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const CreateTicket = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Navigation />
      <Container>
        <TicketCard>
          <TicketForm onSubmit={handleSubmit(onSubmit)}>
            <label>Ticket name</label>
            <input {...register('ticketName', { required: true })} />
            {errors.ticketName && <span>This field is required</span>}
            <label>Notes</label>
            <textarea {...register('notes', { required: true })} />
            {errors.notes && <span>This field is required</span>}
            <label>Environment</label>
            <input {...register('environment', { required: true })} />
            {errors.environment && <span>This field is required</span>}
            <label>Deadline</label>
            <input type="date" {...register('deadline', { required: true })} />
            {errors.deadline && <span>This field is required</span>}
            <StyledButton>Submit</StyledButton>
          </TicketForm>
        </TicketCard>
      </Container>
    </>
  );
};

export default CreateTicket;
