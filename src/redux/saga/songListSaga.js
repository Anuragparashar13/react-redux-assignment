import {takeLatest, put, call, takeEvery} from 'redux-saga/effects';
import types from '../actions/ActionTypes';
import {
  reduxGetsongList,
  reduxsongListSuccess,
  reduxsongListFailure
} from '../actions/SongActions';
import {urls} from '../../screen/Constant';

function* getsong(action) {
  try {
    const json = yield fetch(urls.listURL)
        .then(response => response.json()
        
        );
            console.log('Anurag----------',json);    
             yield put(reduxsongListSuccess(json));
          }
      catch (error) {
        console.log(error);
      }
}

export function* watchGetsongs() {
  yield takeEvery(types.GET_SONG_LIST, getsong);
}
