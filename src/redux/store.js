import { configureStore } from '@reduxjs/toolkit';
import matchDetailReducer from './reducers/matchDetailReducer';
import matchListReducer from './reducers/matchListReducer';

export const store = configureStore({
  reducer: {
    matchList: matchListReducer,
    matchDetail: matchDetailReducer,
  },
});
