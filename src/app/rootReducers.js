import { combineReducers } from 'redux';
import tasksReducer from './tasks/duck';

const rootReducer = combineReducers({
  tasks: tasksReducer
});

export default rootReducer;
