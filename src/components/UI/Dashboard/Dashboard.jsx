import React, { useContext, useState } from 'react';
import TicketForm from '../TicketForm/TicketForm';
import BasicTable from '../Table/BasicTable';
import Navigation from '../Navigation/Navigation';
import { Wrapper } from './Dashboard.styles';
import { AppContext } from '../../../providers/AppProvider';
import TicketContainer from '../TicketContainer/TicketContainer';
import styled from 'styled-components';
import { useFormState } from 'react-hook-form';
import { StyledInput, StyledLabel } from '../Login/Login.styles';

const DashboardCard = styled.div`
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  width: 60%;
  justify-content: space-between;
  height: 89vh;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  div {
    :nth-child(1) {
      position: relative;
      width: 35%;
      overflow-y: scroll;
      ::-webkit-scrollbar {
        display: none;
      }
      ul {
        list-style: none;
        overflow: hidden;
      }
    }
    :nth-child(2) {
      position: relative;
      background-color: teal;
      width: 65%;
      div {
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: red;
        text-align: center;
        margin: 20px 0;
      }
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
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  p {
    margin-bottom: 20px;
    text-align: justify;
  }

  div {
    :nth-child(1) {
      display: flex;
      justify-content: space-between;
      width: 100%;
      border-bottom: solid 1px rgba(0, 0, 0, 0.3);
      padding-bottom: 10px;
      margin-bottom: 20px;

      span {
        :nth-child(1) {
          width: 70%;
          font-weight: 700;
        }
      }

      :after {
        display: none;
      }
    }
  }
`;

const BottomInfoTicket = styled.div`
  border-top: solid 1px rgba(0, 0, 0, 0.3);
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Test = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: tan;
`;

const Dashboard = () => {
  let { userData, tickets } = useContext(AppContext);
  //Get the right one Array depending on the role
  const getAssignedArray = tickets.filter((item) => item.assigned === userData.role);
  const [ticketData, setTicketData] = useState({
    id: '',
    name: '',
    notes: '',
    environment: '',
    deadline: ''
  });
  console.log(ticketData);
  return (
    <>
      <Navigation userData={userData} />
      <Wrapper>
        <DashboardCard>
          <div>
            <ul>
              {tickets.map(({ id, name, notes, environment, deadline }) => (
                <TicketCard
                  onClick={() =>
                    setTicketData({
                      id: id,
                      name: name,
                      notes: notes,
                      environment: environment,
                      deadline: deadline
                    })
                  }>
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
            <div>
              <span>Test</span>
              <label>Test</label>
              <input type="text" />
            </div>
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
