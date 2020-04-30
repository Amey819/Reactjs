import axios from "axios";
import { POSTS_LOADED, POSTS_ERROR } from "../reducers/types";

export const getallposts = () => async dispatch => {
  // call the  get profile api
  try {
    const res = await axios.get("/api/posts/getall");
    console.log(res.data);

    dispatch({
      type: POSTS_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: { msg: err.response }
    });
  }
};
