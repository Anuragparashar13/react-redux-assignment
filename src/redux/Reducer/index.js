// Imports: Dependencies
import {combineReducers} from 'redux';
import {ignoreActions, filterActions} from 'redux-ignore';
import types from '../actions/ActionTypes';

// Imports: Reducers
import {
  getsongListReducer,
} from './songListReducer';
// Redux: Root Reducer
const appReducer = combineReducers({
  songs: getsongListReducer,
});

export default rootReducer = (state, action) => {
  if (action.type === 'CLEAR_STORE') {
    state = {
     
    }; // Need after clearing store
  }

  return appReducer(state, action);
};
