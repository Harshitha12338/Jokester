import {applyMiddleware, createStore} from 'redux';
import AppReducer from './Reducer';
import thunk from 'redux-thunk';
export const configureStore = () => {
  const store = createStore(AppReducer, applyMiddleware(thunk));
  return store;
};
