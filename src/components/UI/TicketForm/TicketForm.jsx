import React from 'react';
import { StyledFormTask } from './TicketForm.styles';

const TicketForm = () => {
  return (
    <StyledFormTask>
      <input type="text" />
      <button>Crate new Ticket</button>
    </StyledFormTask>
  );
};

export default TicketForm;
