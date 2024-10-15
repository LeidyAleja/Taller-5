import { createSlice} from "@reduxjs/toolkit"
import initialState from './state';
import { thunks } from "./thunks";
import reducers from "./reducers";
import { ACTIONS } from './types';

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder.addCase(thunks[ACTIONS.FETCH_USERS].pending, (state) => {
      state.condition = 'loading';
    });
    builder.addCase(thunks[ACTIONS.FETCH_USERS].fulfilled, (state, action) => {
      state.condition = 'success';
      state.users = action.payload;
    });
    builder.addCase(thunks[ACTIONS.FETCH_USERS].rejected, (state) => {
      state.condition = 'error';
    });
  }
});
export const actions = usersSlice.actions;
export default usersSlice.reducer;