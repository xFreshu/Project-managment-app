import React from 'react';
import { useSelector } from 'react-redux';
import { selectTickets } from '../app/features/tickets/ticketsSlice';

const TestView = () => {
  const tickets = useSelector(selectTickets);
  return (
    <div>
      <h1>
        {tickets.map((item) => (
          <div>{item.name}</div>
        ))}
      </h1>
    </div>
  );
};

export default TestView;
