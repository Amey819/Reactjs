import { POSTS_LOADED, POSTS_ERROR } from "../reducers/types";

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case POSTS_LOADED:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case POSTS_ERROR:
      return {
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}

// all posts
// your post
// loading
// user
