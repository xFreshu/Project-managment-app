import styled from 'styled-components';

export const StyledTable = styled.table`
  border-spacing: 0;
  border: 1px solid black;
  margin-right: 360px;
  tr {
    :nth-child(even) {
      background-color: #f2f2f2;
    }

    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }
  th {
    background-color: #39393a;
    color: white;
    font-weight: 700;
    :nth-child(1) {
      width: 100px;
    }
    :nth-child(2) {
      width: 200px;
    }
    :nth-child(3) {
      width: 50%;
    }
    :nth-child(4) {
      width: 100px;
    }
    :nth-child(5) {
      width: 40px;
    }
    :nth-child(6) {
      width: 100px;
    }
    :nth-child(7) {
      width: 100px;
    }
  }
  th,
  td {
    text-align: justify;
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid black;
    border-right: 1px solid black;

    :last-child {
      border-right: 0;
    }
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  padding: 20px;
`;
