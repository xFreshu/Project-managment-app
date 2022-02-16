import React from 'react';
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
          <BasicTable />
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
