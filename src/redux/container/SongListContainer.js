import SongList from '../../screen/screensComponent/SongList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  getsongListInfo,
} from '../selector/songListSelectors';
import {reduxGetsongList, reduxsongListSuccess, reduxsongListFailure} from '../actions/SongActions'

const mapStateToProps = (state) => {
  console.log('user Store:', state);
  return {
    songs: getsongListInfo(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        reduxGetsongList,
        reduxsongListSuccess,
        reduxsongListFailure,
      },
      dispatch,
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
