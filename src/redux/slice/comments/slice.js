import { createSlice} from "@reduxjs/toolkit"
import initialState from './state';
import { thunks } from "./thunks";
import reducers from "./reducers";
import { ACTIONS } from './types';

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder.addCase(thunks[ACTIONS.FETCH_COMMENTS].pending, (state) => {
      state.condition = 'loading';
    });
    builder.addCase(thunks[ACTIONS.FETCH_COMMENTS].fulfilled, (state, action) => {
      state.condition = 'success';
      state.comments = action.payload;
    });
    builder.addCase(thunks[ACTIONS.FETCH_COMMENTS].rejected, (state) => {
      state.condition = 'error';
    });
  }
});
export const actions = commentsSlice.actions;
export default commentsSlice.reducer;