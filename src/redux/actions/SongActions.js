import types from './ActionTypes';

export const reduxGetsongList = () => ({
  type: types.GET_SONG_LIST,
});

export const reduxsongListSuccess = (payload) => ({
  type: types.GET_SONG_LIST_SUCCESS,
  payload: {payload},
});

export const reduxsongListFailure = (payload) => ({
  type: types.GET_SONG_LIST_FAILURE,
  payload: {payload},
});
