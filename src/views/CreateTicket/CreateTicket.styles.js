import styled from 'styled-components';
import { Container, LoginCard } from '../../components/UI/Login/Login.styles';

export const TicketCard = styled(LoginCard)`
  display: flex;
`;
export const TicketForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledLabel = styled.label`
  margin: 25px 0 10px 0;
  font-size: 1.1rem;
  :first-child {
    margin-top: 0;
  }
`;
export const StyledInput = styled.input`
  font-size: 1.3rem;
  padding: 10px;
  outline: none;
  border: solid 1px #0009;
  border-radius: 10px;
`;

export const StyledTextarea = styled.textarea`
  font-size: 1.3rem;
  padding: 10px;
  outline: none;
  border: solid 1px #0009;
  border-radius: 10px;
  resize: none;
  height: 200px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CreateTicketContainer = styled(Container)`
  height: 93.8vh;
  position: absolute;
`;
