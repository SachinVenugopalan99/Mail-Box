import { createStore, applyMiddleware } from 'redux';
// import Immutable from 'seamless-immutable';
import thunk from 'redux-thunk';
import { reducer, initialState } from './reducer';

export const store = createStore(
    reducer,
    applyMiddleware(thunk)
  );
  // store.subscribe(() => console.log(store));