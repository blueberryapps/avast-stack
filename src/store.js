import { applyMiddleware, createStore, compose, combineReducers } from 'redux';

const emptyReducer = (state = { empty: 'reducer' }) => state;

const initialState = {};
const reducers = { emptyReducer };
const middlewares = applyMiddleware();

const allMiddlewares = window.devToolsExtension
  ? compose(middlewares, window.devToolsExtension())
  : middlewares;

export default createStore(
  combineReducers(reducers),
  initialState,
  allMiddlewares
);
