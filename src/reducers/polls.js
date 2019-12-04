import * as actions from "../actions/polls";

export const initialState = {
  polls: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.RECEIVE_POLLS:
      return {
        ...state,
        polls: action.polls
      };
    default:
      return state;
  }
};
