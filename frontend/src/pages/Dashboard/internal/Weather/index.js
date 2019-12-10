import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { weather } from '../../../../actions'

import Weather from './Weather'

export default connect(
  (state) => ({
    weather: state.weather
  }),
  (dispatch) => ({
    weatherActions: bindActionCreators(weather, dispatch)
  })
)(Weather)
