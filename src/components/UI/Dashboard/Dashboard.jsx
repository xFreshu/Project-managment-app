import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TaskForm from '../TaskForm/TaskForm';
import BasicTable from '../Table/BasicTable';
import Navigation from '../Navigation/Navigation';
import styled from 'styled-components';

const TaskCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  width: 400px;
`;

const Dashboard = ({ userData, DUMMY_DATA }) => {
  const [name, setName] = useState(() => {
    //Get key name from local storage
    const saved = localStorage.getItem('name');
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  });
  //For display in modal data
  const [jsonTask, setJsonTask] = useState({});
  //Assign data from local storage to userData
  userData = name;
  //Get the right one Array depending on the role
  const getAssignedArray = DUMMY_DATA.filter((item) => item.assigned === userData.role);
  return (
    <>
      <Navigation userData={userData} />
      <div>
        {userData.role === 'PM' ? <TaskForm /> : null}
        {userData.role !== 'client' ? (
          getAssignedArray.length > 0 ? (
            getAssignedArray.map((item) => <TaskCard key={item.id}>{item.name}</TaskCard>)
          ) : (
            <div>Your login do not have permission for that application :(</div>
          )
        ) : (
          <BasicTable jsonTask={jsonTask} setJsonTask={setJsonTask} />
        )}
      </div>
    </>
  );
};
Dashboard.propTypes = {
  userData: PropTypes.object,
  DUMMY_DATA: PropTypes.array
};
export default Dashboard;
