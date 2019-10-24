import { SEARCH_LOADING, SEARCH_RESULT, SEARCH_SET_TEXT } from "./actionTypes";

export function setText(text) {
  return { type: SEARCH_SET_TEXT, payload: text };
}

export function setSearchLoading(value) {
  return { type: SEARCH_LOADING, payload: value };
}

export function setSearchResult(arr) {
  return { type: SEARCH_RESULT, payload: arr };
}

export function cancelState() {
  return function(dispatch) {
    dispatch(setSearchResult([]));
    dispatch(setText(""));
    dispatch(setSearchLoading(false));
  }
}

export function trySearch(text) {
  return function(dispatch) {
   dispatch(setSearchLoading(true))
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`)
    .then(response => response.json())
    .then(json => {
      dispatch(setSearchResult(json.drinks));
      dispatch(setSearchLoading(false));
    })
  }
}