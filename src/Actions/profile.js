import axios from "axios";
import {
  PROFILE_LOADED,
  PROFILE_ERROR,
  SET_ALERT,
  UPDATE_PROFILE,
} from "../reducers/types";
import { setAlert } from "./alert";

export const getProfile = () => async (dispatch) => {
  // call the  get profile api
  try {
    const res = await axios.get("/api/profile/me");

    dispatch({
      type: PROFILE_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SET_ALERT,
      payload: err.message,
    });
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.message },
    });
  }
};

export const addExperience = (formData, history) => async (dispatch) => {
  // call the  get profile api
  try {
    // take the body
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // add the config with he content-type
    const res = await axios.put("/api/profile/experience", formData, config);
    // adds experience and redirect to dashboard
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert("Experience added", "Success"));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.message },
    });
  }
};
