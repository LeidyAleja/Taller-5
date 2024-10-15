import { createAsyncThunk } from '@reduxjs/toolkit';
import { ACTIONS } from './types';

export const thunks = {
  [ACTIONS.FETCH_USERS]: createAsyncThunk('message/fetchUsers', async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    return response.json();
  }),
};
