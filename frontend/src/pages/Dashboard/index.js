import { connect } from 'react-redux'

import Dashboard from './Dashboard'

export default connect(
  (state) => ({
    auth: state.auth
  }),
  null
)(Dashboard)
