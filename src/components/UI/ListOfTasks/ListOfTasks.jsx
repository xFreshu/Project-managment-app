import React from 'react';
import BasicTable from '../Table/BasicTable';
import Navigation from '../Navigation/Navigation';
import PropTypes from 'prop-types';

const ListOfTasks = () => {
  return (
    <div>
      <Navigation />
      <BasicTable />
    </div>
  );
};

export default ListOfTasks;
