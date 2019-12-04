import * as actions from "../actions/authUser";

export const initialState = {
  authUser: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_AUTHED_USER:
      return {
        ...state,
        authUser: action.id
      };
    default:
      return state;
  }
};
