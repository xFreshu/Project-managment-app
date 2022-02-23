import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TicketDetailsStyles } from './TicketDetails.styles';
import { AppContext } from '../../../providers/AppProvider';
const TicketDetails = ({ ticketData }) => {
  const { deleteTicket } = useContext(AppContext);
  return (
    <TicketDetailsStyles>
      <span>Ticket Details</span>
      <label>Ticket name:</label>
      <input type="text" value={ticketData.name} disabled />
      <label>Notes:</label>
      <textarea value={ticketData.notes} disabled />
      <label>Environment:</label>
      <input type="text" value={ticketData.environment} disabled /> <label>Deadline:</label>
      <input type="text" value={ticketData.deadline} disabled />
      <div>
        <button onClick={() => deleteTicket(ticketData.id)}>Delete</button>
        <button>Edit</button>
      </div>
    </TicketDetailsStyles>
  );
};
TicketDetails.propTypes = {
  ticketData: PropTypes.object.isRequired
};
export default TicketDetails;
