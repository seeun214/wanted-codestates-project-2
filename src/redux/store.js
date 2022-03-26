import { configureStore } from '@reduxjs/toolkit';
import allMatchListReducer from './reducers/allMatchListReducer';
import matchDetailReducer from './reducers/matchDetailReducer';
import matchListReducer from './reducers/matchListReducer';

export const store = configureStore({
  reducer: {
    matchList: matchListReducer,
    matchAllList: allMatchListReducer,
    matchDetail: matchDetailReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
