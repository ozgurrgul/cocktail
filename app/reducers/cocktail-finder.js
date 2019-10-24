import { SEARCH_LOADING, SEARCH_RESULT, SEARCH_SET_TEXT } from "../actions/actionTypes";

const INITIAL_STATE = {
  text: "",
  cocktails: [],
  loading: false
};

export default reducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case SEARCH_SET_TEXT: 
      return {
        ...state,
        text: payload
      };
    case SEARCH_LOADING: 
      return {
        ...state,
        loading: payload
      };
    case SEARCH_RESULT: 
      return {
        ...state,
        cocktails: payload
      };
    default:
      return state;
  }
};