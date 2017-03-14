import { applyMiddleware, createStore, compose, combineReducers } from 'redux';

const emptyReducer = (state = { empty: 'reducer' }) => state;

const initialState = {};
const reducers = { emptyReducer };
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
