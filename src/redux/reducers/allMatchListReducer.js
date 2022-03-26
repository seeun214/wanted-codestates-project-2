import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import customAxios from '../../api/customAxios';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

//전체 매치 리스트
export const getAllMatchList = createAsyncThunk(
  'data/allMatchList',
  async ({ matchType }) => {
    const allMatchList = await customAxios.get(
      `matches/all?start_date=&end_date=&offset=0&limit=50&match_types=${matchType}`,
    );
    return allMatchList;
  },
);

export const allMatchListReducer = createSlice({
  name: 'matchAllList',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllMatchList.pending]: (state) => {
      state.loading = true;
    },
    [getAllMatchList.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data.matches;
      state.error = '';
    },
    [getAllMatchList.rejected]: (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = {
        message: action.error.message,
        stack: action.error.stack,
      };
    },
  },
});

export default allMatchListReducer.reducer;
