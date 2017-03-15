import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import { reducer as onionForm } from 'onion-form';

const initialState = {};
const reducers = { onionForm };
const middlewares = applyMiddleware();

const allMiddlewares = window.devToolsExtension
  ? compose(middlewares, window.devToolsExtension())
  : middlewares;

const store = createStore(
  combineReducers(reducers),
  initialState,
  allMiddlewares
);

export default store;
