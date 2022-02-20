import React, { useContext, useState } from 'react';
import TicketForm from '../TicketForm/TicketForm';
import BasicTable from '../Table/BasicTable';
import Navigation from '../Navigation/Navigation';
import { Wrapper } from './Dashboard.styles';
import { AppContext } from '../../../providers/AppProvider';
import TicketContainer from '../TicketContainer/TicketContainer';

const Dashboard = () => {
  let { userData, tickets } = useContext(AppContext);
  //Get the right one Array depending on the role
  const getAssignedArray = tickets.filter((item) => item.assigned === userData.role);
  return (
    <>
      <Navigation userData={userData} />
      <Wrapper>
        {userData.role === 'PM' ? <TicketForm /> : null}
        {userData.role !== 'client' ? (
          getAssignedArray.length > 0 ? (
            getAssignedArray.map(({ id, name, notes, environment, deadline }) => (
              <TicketContainer
                id={id}
                name={name}
                notes={notes}
                environment={environment}
                deadline={deadline}
              />
            ))
          ) : (
            <div>Your login do not have permission for that application :(</div>
          )
        ) : (
          <BasicTable />
        )}
      </Wrapper>
    </>
  );
};

export default Dashboard;
