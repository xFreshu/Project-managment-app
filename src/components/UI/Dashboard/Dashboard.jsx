import React from 'react';
import PropTypes from 'prop-types';
import TaskForm from '../TaskForm/TaskForm';
import BasicTable from '../Table/BasicTable';

const Dashboard = ({ userData, DUMMY_DATA }) => {
  //Get the right one Array depending on the role
  const getAssignedArray = DUMMY_DATA.filter((item) => item.assigned === userData.role);
  return (
    <div>
      <div>yo {userData.role}</div>
      {userData.role === 'PM' ? <TaskForm /> : null}
      {/*<div>*/}
      {/*  {DUMMY_DATA.map((item) => (*/}
      {/*    <div key={item.id}>{item.name}</div>*/}
      {/*  ))}*/}
      {/*</div>*/}
      <BasicTable getAssignedArray={getAssignedArray} />
    </div>
  );
};
Dashboard.propTypes = {
  userData: PropTypes.object,
  DUMMY_DATA: PropTypes.array
};
export default Dashboard;
