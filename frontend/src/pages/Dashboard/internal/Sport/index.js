import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { sport } from '../../../../actions'

import Sport from './Sport'

export default connect(
  (state) => ({
    sport: state.sport
  }),
  (dispatch) => ({
    sportActions: bindActionCreators(sport, dispatch)
  })
)(Sport)
