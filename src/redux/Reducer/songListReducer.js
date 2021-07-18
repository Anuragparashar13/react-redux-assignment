import types from '../actions/ActionTypes';
import initialState from './IntialState';

export const getsongListReducer = (
  state = initialState.songList,
  action,
) => {
  const {type, payload} = action;
  switch (type) {
    case types.GET_SONG_LIST: {
      return state;
    }
    case types.GET_SONG_LIST_SUCCESS: {
      if (payload) {
        return payload;
      }
      return state;
    }
    case types.GET_SONG_LIST_FAILURE: {
      return null;
    }
  }
  return state;
};
