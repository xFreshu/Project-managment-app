import { configureStore } from '@reduxjs/toolkit';
import ticketsSlice from './features/tickets/ticketsSlice';

export default configureStore({
  reducer: {
    tickets: ticketsSlice
  }
});
