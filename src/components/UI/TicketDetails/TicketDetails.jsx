import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TicketDetailsStyles } from './TicketDetails.styles';
import { AppContext } from '../../../providers/AppProvider';

const TicketDetails = ({ ticketData, userData }) => {
  const { deleteTicket, ChangeValue, changeStatus } = useContext(AppContext);
  return (
    <TicketDetailsStyles>
      <label>Ticket name:</label>
      <input type="text" value={ticketData.name} disabled />
      <label>Notes:</label>
      <textarea value={ticketData.notes} disabled />
      <label>Environment:</label>
      <input type="text" value={ticketData.environment} disabled />
      <label>Deadline:</label>
      <input type="text" value={ticketData.deadline} disabled />
      <div>
        {userData.role === 'PM' ? (
          <button onClick={() => deleteTicket(ticketData.id)}>Delete</button>
        ) : null}
        {userData.role === 'developer' ? (
          <button onClick={() => ChangeValue(ticketData.id)}>Send to tester</button>
        ) : null}
        {userData.role === 'tester' ? (
          <button onClick={() => ChangeValue(ticketData.id)}>Send to PM</button>
        ) : null}
        <button onClick={() => changeStatus(ticketData.id)}>Change status</button>
      </div>
    </TicketDetailsStyles>
  );
};
TicketDetails.propTypes = {
  ticketData: PropTypes.object.isRequired,
  userData: PropTypes.object.isRequired
};
export default TicketDetails;
