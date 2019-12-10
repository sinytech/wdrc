import { connect } from 'react-redux'
import PublicRoute from './PublicRoute'

export default connect((state) => ({ auth: state.auth }), null)(PublicRoute)
