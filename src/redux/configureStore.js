// Imports: Dependencies
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './Reducer/index';
import {rootSaga} from './saga/index';

let storeReference;


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);


storeReference = store;
sagaMiddleware.run(rootSaga);
export {store,  storeReference};
