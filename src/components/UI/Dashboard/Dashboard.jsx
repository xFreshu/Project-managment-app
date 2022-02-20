import React, { useContext } from 'react';
import TicketForm from '../TicketForm/TicketForm';
import BasicTable from '../Table/BasicTable';
import Navigation from '../Navigation/Navigation';
import { Wrapper } from './Dashboard.styles';
import { AppContext } from '../../../providers/AppProvider';
import TicketContainer from '../TicketContainer/TicketContainer';
import styled from 'styled-components';

const DashboardCard = styled.div`
  background-color: grey;
  border-radius: 20px;
  display: flex;
  width: 60%;
  justify-content: space-between;
  padding: 20px;
  height: 89vh;
  div {
    :nth-child(1) {
      position: relative;
      width: 30%;
      ul {
        list-style: none;
      }
    }
    :nth-child(2) {
      position: relative;
      background-color: red;
      width: 65%;
      :after {
        position: absolute;
        left: 0;
        content: '';
        display: inline-block;
        width: 4px;
        height: 200px;
        top: 50%;
        transform: translateY(-50%);
        background-color: black;
        border-radius: 20px;
      }
    }
  }
`;
const StyledEnv = styled.span`
  font-weight: 700;
  color: ${({ value }) => {
    if (value === 'prod') return '#f44336';
    if (value === 'test') return '#03a9f4';
    if (value === 'dev') return '#4caf50';
  }};
  background-color: ${({ value }) => {
    if (value === 'prod') return 'rgba(244,67,54,0.3)';
    if (value === 'test') return 'rgba(3,169,244,0.3)';
    if (value === 'dev') return 'rgba(76,175,80,0.3)';
  }};
  padding: 4px 7px;
  border-radius: 10px;
`;

const TicketCard = styled.li`
  background-color: #fff;
  margin: 20px 0;
  div {
    :nth-child(1) {
      :after {
        display: none;
      }
    }
  }
`;

const Dashboard = () => {
  let { userData, tickets } = useContext(AppContext);
  //Get the right one Array depending on the role
  const getAssignedArray = tickets.filter((item) => item.assigned === userData.role);
  return (
    <>
      <Navigation userData={userData} />
      <Wrapper>
        <DashboardCard>
          <div>
            <ul>
              {tickets.map(({ id, name, notes, environment, deadline }) => (
                <TicketCard>
                  <div>
                    <span>{name}</span>
                    <span>{id}</span>
                  </div>
                </TicketCard>
              ))}
            </ul>
          </div>
          <div>Ticket display</div>
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
