import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TicketContainer = ({ id, name, notes, environment, deadline }) => {
  return (
    <TicketCard key={id}>
      <div>
        <span>{name}</span>
        <span>#{id}</span>
      </div>
      <p>{notes}</p>
      <div>
        <StyledEnv value={environment}>{environment}</StyledEnv>
        <span>{deadline}</span>
      </div>
    </TicketCard>
  );
};

TicketContainer.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  notes: PropTypes.string,
  environment: PropTypes.string,
  deadline: PropTypes.string
};

export default TicketContainer;
