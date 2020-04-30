import {
  PROFILE_LOADED,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
} from "../reducers/types";

const initialState = {
  profile: null,
  profiles: [],
  loading: true,
  error: {},
  repo: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  // eslint-disable-next-line default-case
  switch (type) {
    case PROFILE_LOADED:
    case UPDATE_PROFILE:
      return { ...state, profile: payload, loading: false };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_PROFILE:
      return { ...state, loading: false, profile: null, repo: [], error: [] };

    default:
      return state;
  }
}
