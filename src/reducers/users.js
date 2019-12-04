import * as actions from "../actions/users";

export const initialState = {
  users: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.RECEIVE_USERS:
      return {
        ...state,
        users: action.users
      };
    default:
      return state;
  }
};
