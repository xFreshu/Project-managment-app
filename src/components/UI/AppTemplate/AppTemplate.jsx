import React from 'react';
import Navigation from '../Navigation/Navigation';
import PropTypes from 'prop-types';

const AppTemplate = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

AppTemplate.propTypes = {
  children: PropTypes.any.isRequired
};

export default AppTemplate;
