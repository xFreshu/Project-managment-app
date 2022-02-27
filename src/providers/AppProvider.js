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
  sendToTester: () => {},
  sendToPM: () => {}
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

  const deleteTicket = (id) => {
    const updatedTicketArray = tickets.filter((item) => item.id !== id);
    setDisplayTicket(false);
    setTickets(updatedTicketArray);
  };

  const sendToTester = (id) => {
    let updatedTicket = tickets.map((item) => {
      if (item.id === id) {
        item.assigned = 'tester';
        setDisplayTicket(false);
      }
      return item;
    });
    setTickets(updatedTicket);
  };
  const sendToPM = (id) => {
    let updatedTicket = tickets.map((item) => {
      if (item.id === id) {
        item.assigned = 'PM';
        setDisplayTicket(false);
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
        deleteTicket,
        displayTicket,
        setDisplayTicket,
        sendToTester,
        sendToPM
      }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node
};

export default AppProvider;
