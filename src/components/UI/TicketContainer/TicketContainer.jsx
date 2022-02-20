import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TicketWrapper = styled.div`
  justify-content: center;
  display: flex;
  padding: 20px;
  width: 100%;
`;

const TicketCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  width: 300px;
  min-height: 150px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  div {
    display: flex;
    justify-content: space-between;
    :nth-child(1) {
      span {
        :nth-child(1) {
          font-weight: 700;
        }
      }
    }
  }
  p {
    margin: 10px 0;
  }
`;

const StyledEnv = styled.span`
  font-weight: 700;
  color: ${({ value }) => {
    if (value === 'prod') return '#f44336';
    if (value === 'test') return '#03a9f4';
    if (value === 'dev') return '#4caf50';
  }};
  background-color: ${({ value }) => {
    if (value === 'prod') return 'rgba(244,67,54,0.3)';
    if (value === 'test') return 'rgba(3,169,244,0.3)';
    if (value === 'dev') return 'rgba(76,175,80,0.3)';
  }};
  padding: 4px 7px;
  border-radius: 10px;
`;

const TicketContainer = ({ id, name, notes, environment, deadline }) => {
  return (
    <TicketWrapper>
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
    </TicketWrapper>
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
