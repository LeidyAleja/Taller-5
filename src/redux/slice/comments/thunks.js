import { createAsyncThunk } from '@reduxjs/toolkit';
import { ACTIONS } from './types';

export const thunks = {
  [ACTIONS.FETCH_COMMENTS]: createAsyncThunk(
    'message/fetchComments',
    async (postId) => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
      return response.json();
    }
  ),
};
