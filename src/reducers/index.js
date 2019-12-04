import { combineReducers } from "redux";
import authUser from "./authUser";
import polls from "./polls";
import users from "./users";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  authUser,
  polls,
  users,
  loadingBar: loadingBarReducer
});
