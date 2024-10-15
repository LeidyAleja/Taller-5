import { createAsyncThunk } from '@reduxjs/toolkit';
import { ACTIONS } from './types';

export const thunks = {
  [ACTIONS.FETCH_POSTS]: createAsyncThunk('message/fetchPosts', async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    return response.json();
  }),
};
