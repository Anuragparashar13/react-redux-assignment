// Imports: Dependencies
import {all, fork} from 'redux-saga/effects';
// Imports: Redux Sagas
import {
  watchGetsongs,
} from './songListSaga';

// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([
    fork(watchGetsongs),
    
  ]);
}
