import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import customAxios from '../../api/customAxios';

const nickname = 'BBEESSTT';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const getUserData = createAsyncThunk(
  'user/fetchData',
  async ({ gameType }) => {
    const res = await customAxios.get(`users/nickname/${nickname}`);

    const matchData = await customAxios.get(
      `users/${res.data.accessId}/matches?start_date=&end_date= &offset=0&limit=200&match_types=`,
    );

    // if (res.status === 200) {
    //   const contentType = res.headers.get('content-type');
    //   if (contentType === 'application/json; charset=utf-8') {
    //     const data = await res.json();
    //     return data;
    //   } else {
    //     throw new Error('Sorry, Something is wrong');
    //   }
    // } else {
    //   throw new Error('Sorry, Something is wrong');
    // }
  },
);

export const userDataReducer = createSlice({
  name: 'userData',
  initialState,
  reducers: {},
  extraReducers: {
    [getUserData.pending]: (state) => {
      state.loading = true;
    },
    [getUserData.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    },
    [getUserData.rejected]: (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    },
  },
});

export default userDataReducer.reducer;
