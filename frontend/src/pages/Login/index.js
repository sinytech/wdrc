import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { auth } from '../../actions'

import Login from './Login'

export default connect(
  null,
  (dispatch) => ({
    authActions: bindActionCreators(auth, dispatch)
  })
)(Login)
