import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StyledNavigation, Login } from './Navigation.styles';
import { AppContext } from '../../../providers/AppProvider';

const Navigation = () => {
  const { userData, setDisplayTicket } = useContext(AppContext);
  return (
    <StyledNavigation onClick={() => setDisplayTicket(false)}>
      <ul>
        <Login>Login: {userData.role}</Login>
        {userData.role !== 'client' ? (
          <li>
            <Link to="/dashboard">Your tasks</Link>
          </li>
        ) : null}
        {userData.role !== 'client' ? (
          <li>
            <Link to="/list-of-tasks">List of tasks</Link>
          </li>
        ) : null}
        {userData.role === 'client' ? (
          <>
            <li>
              <Link to="/dashboard">Tickets</Link>
            </li>
            <li>
              <Link to="/create-ticket">Create ticket</Link>
            </li>
          </>
        ) : null}
        <li>
          <Link to="/">Logout</Link>
        </li>
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
