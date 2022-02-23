import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  align-items: center;
`;
export const DashboardCard = styled.div`
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
      width: 65%;
      div {
        display: flex;
        flex-direction: column;
        width: 100%;
        text-align: center;
        margin: 20px 0;
        padding: 0 40px;
        div {
          display: flex;
          flex-direction: row;
          margin-top: 50px;
          justify-content: space-evenly;
          button {
            font-size: 1.2rem;
            padding: 5px 8px;
            border-radius: 10px;
            border: solid 1px #000;
            background-color: transparent;
          }
        }
        label {
          margin-top: 40px;
          font-size: 1.4rem;
          font-weight: 700;
        }
        input,
        textarea {
          margin-top: 20px;
          letter-spacing: 1px;
          font-size: 1.2rem;
        }
        textarea {
          height: 150px;
          resize: none;
          font-family: 'Montserrat', sans-serif;
        }
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
export const StyledEnv = styled.span`
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

export const TicketCard = styled.li`
  background-color: #fff;
  margin: 30px 20px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
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

export const BottomInfoTicket = styled.div`
  border-top: solid 1px rgba(0, 0, 0, 0.3);
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
