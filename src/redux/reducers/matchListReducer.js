import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import customAxios from '../../api/customAxios';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

//유저의 매치 리스트(개인, 팀)
export const getUserMatchList = createAsyncThunk(
  'data/userMatchList',
  async ({ nickName, matchType }) => {
    const res = await customAxios.get(`users/nickname/${nickName}`);

    const matchList = await customAxios.get(
      `users/${res.data.accessId}/matches?start_date=&end_date= &offset=0&limit=200&match_types=${matchType}`,
    );
    return matchList;
  },
);

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

export const matchListReducer = createSlice({
  name: 'matchList',
  initialState,
  reducers: {},
  extraReducers: {
    [getUserMatchList.pending]: (state) => {
      state.loading = true;
    },
    [getUserMatchList.fulfilled]: (state, action) => {
      const characterCode = [];
      state.loading = false;
      state.data = {
        userMatch: action.payload.data.matches[0].matches.map((match) => {
          characterCode.push(match.player.character);
          return {
            match,
            matchId: match.matchId,
            kart: match.player.kart,
            matchRank: match.player.matchRank,
            matchWin: match.player.matchWin,
            trackId: match.trackId,
          };
        }),
        nickName: action.payload.data.nickName,
        character: characterCode[0],
      };
      state.error = '';
    },
    [getUserMatchList.rejected]: (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = {
        message: action.error.message,
        stack: action.error.stack,
      };
    },

    [getAllMatchList.pending]: (state) => {
      state.loading = true;
    },
    [getAllMatchList.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
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

export default matchListReducer.reducer;
