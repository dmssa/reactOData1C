//import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './../reducers';

//const logger = createLogger();

export default () => {
  const store = createStore(
      rootReducer, 
      applyMiddleware(
      //  logger, 
        thunk)
      );
  return store;
}