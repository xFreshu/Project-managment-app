import React from 'react';
import BasicTable from '../Table/BasicTable';
import Navigation from '../Navigation/Navigation';
import PropTypes from 'prop-types';

const ListOfTasks = ({ userData }) => {
  return (
    <div>
      <Navigation userData={userData} />
      <BasicTable />
    </div>
  );
};
ListOfTasks.propTypes = {
  userData: PropTypes.object.isRequired
};
export default ListOfTasks;
