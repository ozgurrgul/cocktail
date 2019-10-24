import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cocktailFinder from "./reducers/cocktail-finder"

export default createStore(
  combineReducers({
    cocktailFinder,
  }),
  applyMiddleware(thunk)
);