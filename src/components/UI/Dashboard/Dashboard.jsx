import React, { useContext, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import {
  Wrapper,
  DashboardCard,
  BottomInfoTicket,
  TicketCard,
  StyledEnv
} from './Dashboard.styles';
import { AppContext } from '../../../providers/AppProvider';
import TicketDetails from '../TicketDetails/TicketDetails';

const Dashboard = () => {
  let { userData, tickets, deleteTicket, displayTicket, setDisplayTicket } = useContext(AppContext);
  //Get the right one Array depending on the role
  const getAssignedArray = tickets.filter((item) => item.assigned === userData.role);
  const [ticketData, setTicketData] = useState({
    id: '',
    name: '',
    notes: '',
    environment: '',
    deadline: ''
  });

  return (
    <>
      <Navigation userData={userData} />
      <Wrapper>
        <DashboardCard>
          <div>
            <ul>
              {tickets.map(({ id, name, notes, environment, deadline }) => (
                <TicketCard
                  onClick={() => {
                    setTicketData({
                      id: id,
                      name: name,
                      notes: notes,
                      environment: environment,
                      deadline: deadline
                    });
                    setDisplayTicket(true);
                  }}>
                  <div>
                    <span>{name}</span>
                    <span>{id}</span>
                  </div>
                  <p>{notes}</p>
                  <BottomInfoTicket>
                    <StyledEnv value={environment}>{environment}</StyledEnv>
                    <span>{deadline}</span>
                  </BottomInfoTicket>
                </TicketCard>
              ))}
            </ul>
          </div>
          <div>
            {displayTicket === true ? (
              <TicketDetails ticketData={ticketData} />
            ) : (
              <div
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  display: 'flex',
                  height: '100%'
                }}>
                Click on ticket to display details
              </div>
            )}
          </div>
        </DashboardCard>
        <div>Widget pie chart</div>
      </Wrapper>
    </>
  );
};

export default Dashboard;

// {userData.role === 'PM' ? <TicketForm /> : null}
// {userData.role !== 'client' ? (
//   getAssignedArray.length > 0 ? (
//     getAssignedArray.map(({ id, name, notes, environment, deadline }) => (
//       <TicketContainer
//         id={id}
//         name={name}
//         notes={notes}
//         environment={environment}
//         deadline={deadline}
//       />
//     ))
//   ) : (
//     <div>Your login do not have permission for that application :(</div>
//   )
// ) : (
//   <BasicTable />
// )}
