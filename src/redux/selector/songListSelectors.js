import {createSelector} from 'reselect';

const getsongListState = (state) => {
  if (!state) {
    return undefined;
  }
  return state;
};
export const getsongListInfo = createSelector(
  getsongListState,
  (songList) => {
    return songList;
  },
);

