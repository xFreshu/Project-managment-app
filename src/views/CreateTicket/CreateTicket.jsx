import React, { useContext } from 'react';
import Navigation from '../../components/UI/Navigation/Navigation';
import { StyledButton } from '../../components/UI/Login/Login.styles';
import { useForm } from 'react-hook-form';
import { AppContext } from '../../providers/AppProvider';
import {
  CreateTicketContainer,
  TicketCard,
  TicketForm,
  StyledLabel,
  StyledTextarea,
  StyledInput
} from './CreateTicket.styles';

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
