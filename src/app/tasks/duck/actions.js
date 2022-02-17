import types from './types';

const add = (item) => ({
  type: types.ADD_TASK,
  item
});

export default { add };
