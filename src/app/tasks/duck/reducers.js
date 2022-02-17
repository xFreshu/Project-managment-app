import types from './types';

const INITIAL_STATE = {
  tasks: [
    {
      id: 1,
      name: 'PM task',
      notes: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
      assigned: 'PM',
      environment: 'test',
      deadline: '16-2-2022',
      status: 'In progress'
    },
    {
      id: 2,
      name: 'dev task',
      notes: 'ipsum lorem ipsum lorem ipsum ',
      assigned: 'developer',
      environment: 'prod',
      deadline: '13-2-2022',
      status: 'pending'
    },
    {
      id: 3,
      name: 'Change title',
      notes: 'ipsum lorem ipsum lorem ipsum ipsum lorem ipsum',
      assigned: 'developer',
      environment: 'dev',
      deadline: '20-2-2022',
      status: 'done'
    },
    {
      id: 4,
      name: 'Change value',
      notes: 'ipsum lorem ipsum lorem ipsum ipsum lorem ipsum',
      assigned: 'developer',
      environment: 'dev',
      deadline: '22-2-2022',
      status: 'pending'
    }
  ]
};

const tasksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_TASK:
      return state;
    case types.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.item]
      };
    default:
      return state;
  }
};

export default tasksReducer;
