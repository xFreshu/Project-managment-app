import styled from 'styled-components';

export const TicketDetailsStyles = styled.div`
  position: relative;
  width: 65%;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    margin: 20px 0;
    padding: 0 40px;
    button {
      :hover {
        cursor: pointer;
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
`;
