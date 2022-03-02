import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DUMMY_DATA } from '../data/Tasks';

export const AppContext = React.createContext({
  tickets: [],
  userData: {},
  setTickets: () => {},
  setUserData: () => {},
  deleteTicket: () => {},
  setDisplayTicket: () => {},
  ChangeValue: () => {},
  changeStatus: () => {}
});

const AppProvider = ({ children }) => {
  const [tickets, setTickets] = useState(DUMMY_DATA);
  const [displayTicket, setDisplayTicket] = useState(false);
  const [name, setName] = useState(() => {
    //Get key name from local storage
    const saved = localStorage.getItem('name');
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  });
  const [userData, setUserData] = useState(name);

  const changeStatus = (id) => {
    let updatedTicket = tickets.map((item) => {
      if (item.id === id) {
        if (item.status === 'In progress') item.status = 'Pending';
        else item.status = 'In progress';
      }
      return item;
    });
    setTickets(updatedTicket);
  };
  const ChangeValue = (id) => {
    let updatedTicket = tickets.map((item) => {
      if (item.id === id) {
        if (item.assigned === 'developer') {
          item.assigned = 'tester';
          item.status = 'pending';
          setDisplayTicket(false);
        } else if (item.assigned === 'tester') {
          item.assigned = 'PM';
          item.status = 'pending';
          setDisplayTicket(false);
        } else {
          item.assigned = 'client';
          item.status = 'done';
        }
      }
      return item;
    });
    setTickets(updatedTicket);
  };

  return (
    <AppContext.Provider
      value={{
        tickets,
        setTickets,
        userData,
        setUserData,
        displayTicket,
        setDisplayTicket,
        ChangeValue,
        changeStatus
      }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node
};

export default AppProvider;
