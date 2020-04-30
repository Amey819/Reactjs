import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import posts from "./posts";
// combine all reducers that perform different functions
// reducers will have action types such as on logout, onlogin, onformsubmit etc

export default combineReducers({
  alert,
  auth,
  profile,
  posts
});
