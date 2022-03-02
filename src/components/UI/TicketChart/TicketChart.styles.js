import styled from 'styled-components';

export const PieChartCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  border-radius: 20px;
  padding: 30px;
  min-width: 300px;
  position: fixed;
  background-color: #fff;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  span {
    display: inline-block;
    text-align: center;
    width: 100%;
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 30px;
  }
  div {
    span {
      margin-bottom: 10px;
      font-weight: normal;
    }
  }
`;
export const ExtraInfoFromChart = styled.div`
  span {
    display: flex;
    border-radius: 20px;
    padding: 10px;
    justify-content: center;
    :nth-child(1) {
      font-weight: 700;
      color: #4caf50;
      background-color: rgba(76, 175, 80, 0.3);
    }
    :nth-child(2) {
      font-weight: 700;
      color: #03a9f4;
      background-color: rgba(3, 169, 244, 0.3);
    }
    :nth-child(3) {
      font-weight: 700;
      color: #f44336;
      background-color: rgba(244, 67, 54, 0.3);
    }
  }
`;
