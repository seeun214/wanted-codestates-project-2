import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import customAxios from '../../api/customAxios';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const getMatchDetail = createAsyncThunk(
  'data/matchDetail',
  async ({ matchId }) => {
    const matchDetail = await customAxios.get(`/matches/${matchId}`);
  },
);

export const matchDetailReducer = createSlice({
  name: 'matchDetail',
  initialState,
  reducers: {},
  extraReducers: {
    [getMatchDetail.pending]: (state) => {
      state.loading = true;
    },
    [getMatchDetail.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    },
    [getMatchDetail.rejected]: (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = {
        message: action.error.message,
        stack: action.error.stack,
      };
    },
  },
});

export default matchDetailReducer.reducer;
