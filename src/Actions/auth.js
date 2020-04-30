import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE
} from "../reducers/types";
import { setAlert } from "./alert";

// check for login
// userloaded helps us identify which is the user that is authenticated based on token
export const loadUser = () => async dispatch => {
  // will send global headers to send the request

  // then call the api and get the user object returned
  // send the token to get the user object
  // response must contain user object
  try {
    const res = await axios.get("/api/auth");
    console.log(res.data);
    // dispatch the api call
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_FAIL
    });
  }
};

// here the action type will be dispatched
export const register = ({ name, email, password }) => async dispatch => {
  // create the header element
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ name, email, password });
  try {
    // call the axios method here
    const res = await axios.post("/api/users", body, config);
    console.log(res.data);
    // store and send the response to the dispatch action
    // the response received is the token which will be used for user action
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    // show the error
    console.log(err);
    const errors = err.response.data.errors;
    // show all the errors using set_alert reducer that displays it on the UI
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// login action dispatched when login button clicked
export const login = ({ email, password }) => async dispatch => {
  // create the header element
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ email, password });
  try {
    // call the axios method here
    const res = await axios.post("/api/auth", body, config);
    // will return the token
    console.log(res.data);
    // store and send the response to the dispatch action
    // the response received is the token which will be used for user action
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    // show the error
    console.log(err);
    const errors = err.response.data.errors;
    // show all the errors using set_alert reducer that displays it on the UI
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

export const logout = () => dispatch => {
  dispatch({
    type: CLEAR_PROFILE
  });
  dispatch({
    type: LOGOUT
  });
};
