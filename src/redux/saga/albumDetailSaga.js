
import {takeLatest, put, call, takeEvery} from 'redux-saga/effects';
import types from '../actions/ActionTypes';
import {
  reduxGetsongDetail,
  reduxsongDetailSuccess,
  reduxsongDetailFailure
} from '../actions/songDetailActions';
import {urls} from '../../screen/Constant';

function* getsongDetail(action) {
  try {
    const json = yield fetch(`${urls.listURL}/${action.payload.payload}/photos`)
        .then(response => response.json()
        
        );
            console.log('Anurag++++++++',`${urls.listURL}/${action.payload.payload}/photos`,json);    
             yield put(reduxsongDetailSuccess(json));
          }
      catch (error) {
        console.log(error);
      }
}

export function* watchGetsongDetail() {
  yield takeEvery(types.GET_song_DETAIL, getsongDetail);
}
