import { ACTIONS } from './types';

export default {
  [ACTIONS.SET_STATUS]: (state, action) => {
    state.status = action.payload;
  },
};
