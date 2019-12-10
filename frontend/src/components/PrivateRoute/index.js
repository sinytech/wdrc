import { connect } from 'react-redux'
import PrivateRoute from './PrivateRoute'

export default connect((state) => ({ auth: state.auth }), null)(PrivateRoute)
