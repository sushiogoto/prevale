import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Map from '../components/Map';
import * as MapActions from '../actions/map';

function mapStateToProps(state) {
  return {
    currentJourney: state.map.currentJourney
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MapActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
