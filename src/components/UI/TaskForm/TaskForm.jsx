import React from 'react';
import { StyledFormTask } from './TaskForm.styles';

const TaskForm = () => {
  return (
    <StyledFormTask>
      <input type="text" />
      <button>Crate new task</button>
    </StyledFormTask>
  );
};

export default TaskForm;
