import React from 'react';
import PropTypes from 'prop-types';
import { TicketDetailsStyles } from './TicketDetails.styles';
const TicketDetails = ({ ticketData }) => {
  return (
    <TicketDetailsStyles>
      <div>
        <span>Ticket Details</span>
        <label>Ticket name:</label>
        <input type="text" value={ticketData.name} disabled />
        <label>Notes:</label>
        <textarea value={ticketData.notes} disabled />
        <label>Environment:</label>
        <input type="text" value={ticketData.environment} disabled /> <label>Deadline:</label>
        <input type="text" value={ticketData.deadline} disabled />
      </div>
    </TicketDetailsStyles>
  );
};
TicketDetails.propTypes = {
  ticketData: PropTypes.object.isRequired
};
export default TicketDetails;
