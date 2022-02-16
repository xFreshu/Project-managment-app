import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNavigation, Login } from './Navigation.styles';
import PropTypes from 'prop-types';

const Navigation = ({ userData }) => {
  return (
    <StyledNavigation>
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
        <li>
          <Link to="/">Logout</Link>
        </li>
      </ul>
    </StyledNavigation>
  );
};

Navigation.propTypes = {
  userData: PropTypes.object
};
export default Navigation;
