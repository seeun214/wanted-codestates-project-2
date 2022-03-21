import { configureStore } from '@reduxjs/toolkit';
import userDataReducer from './reducers/userDataReducer';

export const store = configureStore({
  reducer: {
    data: userDataReducer,
  },
});
