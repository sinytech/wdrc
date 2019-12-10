import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { auth } from '../../actions'

import Register from './Register'

export default connect(
  null,
  (dispatch) => ({
    authActions: bindActionCreators(auth, dispatch)
  })
)(Register)
