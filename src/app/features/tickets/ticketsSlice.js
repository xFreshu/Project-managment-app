import { createSlice } from '@reduxjs/toolkit';

export const ticketsSlice = createSlice({
  name: 'allTickets',
  initialState: [
    {
      id: 1,
      name: 'PM task',
      notes: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
      assigned: 'PM',
      environment: 'test',
      deadline: '16-2-2022',
      status: 'In progress'
    }
  ]
});

export const selectTickets = (state) => state.tickets;

export default ticketsSlice.reducer;
