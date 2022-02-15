import React from 'react';
import styled from 'styled-components';

const StyledFormTask = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: red;
  width: 500px;
  margin: 0 auto;
  input {
    padding: 10px;
    font-size: 1.2rem;
  }
  button {
    padding: 0 10px;
  }
`;

const TaskForm = () => {
  return (
    <StyledFormTask>
      <input type="text" />
      <button>Crate new task</button>
    </StyledFormTask>
  );
};

export default TaskForm;
