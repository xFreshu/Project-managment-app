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

const StyledLabel = styled.label`
  margin: 25px 0 10px 0;
  font-size: 1.1rem;
  :first-child {
    margin-top: 0;
  }
`;
const StyledInput = styled.input`
  font-size: 1.3rem;
  padding: 10px;
  outline: none;
  border: solid 1px #0009;
  border-radius: 10px;
`;

const StyledTextarea = styled.textarea`
  font-size: 1.3rem;
  padding: 10px;
  outline: none;
  border: solid 1px #0009;
  border-radius: 10px;
  resize: none;
  height: 200px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const CreateTicketContainer = styled(Container)`
  height: 93.8vh;
  position: absolute;
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
      <CreateTicketContainer>
        <TicketCard>
          <TicketForm onSubmit={handleSubmit(onSubmit)}>
            <StyledLabel>Ticket name</StyledLabel>
            <StyledInput {...register('name', { required: true })} />
            {errors.name && <span>This field is required</span>}
            <StyledLabel>Notes</StyledLabel>
            <StyledTextarea {...register('notes', { required: true })} />
            {errors.notes && <span>This field is required</span>}
            <StyledLabel>Environment</StyledLabel>
            <StyledInput {...register('environment', { required: true })} />
            {errors.environment && <span>This field is required</span>}
            <StyledLabel>Deadline</StyledLabel>
            <StyledInput type="date" {...register('deadline', { required: true })} />
            {errors.deadline && <span>This field is required</span>}
            <StyledButton>Submit</StyledButton>
          </TicketForm>
        </TicketCard>
      </CreateTicketContainer>
    </>
  );
};

export default CreateTicket;
