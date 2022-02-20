import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DUMMY_DATA } from '../data/Tasks';

export const AppContext = React.createContext({
  tickets: [],
  userData: {},
  setTickets: () => {},
  setUserData: () => {}
});

const AppProvider = ({ children }) => {
  const [tickets, setTickets] = useState(DUMMY_DATA);
  const [userData, setUserData] = useState({});

  return (
    <AppContext.Provider
      value={{
        tickets,
        setTickets,
        userData,
        setUserData
      }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node
};

export default AppProvider;
