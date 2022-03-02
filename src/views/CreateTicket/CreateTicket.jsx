import React, { useContext } from 'react';
import Navigation from '../../components/UI/Navigation/Navigation';
import { Container, LoginCard, StyledButton } from '../../components/UI/Login/Login.styles';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { AppContext } from '../../providers/AppProvider';

const TicketCard = styled(LoginCard)`
  display: flex;
`;
const TicketForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const CreateTicket = () => {
  const { tickets, setTickets } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const generateID = Math.random().toString(36).slice(2);
  const onSubmit = (data) => {
    setTickets([...tickets, { ...data, assigned: 'developer', status: 'pending', id: generateID }]);
    reset();
  };
  return (
    <>
      <Navigation />
      <Container>
        <TicketCard>
          <TicketForm onSubmit={handleSubmit(onSubmit)}>
            <label>Ticket name</label>
            <input {...register('name', { required: true })} />
            {errors.name && <span>This field is required</span>}
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
