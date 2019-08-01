import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import shopReducer from './reducers/index';

export default function setupStore() {
  return createStore(shopReducer, applyMiddleware(thunk))
}