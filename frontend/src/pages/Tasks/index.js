import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { tasks } from '../../actions'

import Tasks from './Tasks'

export default connect(
  (state) => ({
    tasks: state.tasks
  }),
  (dispatch) => ({
    tasksActions: bindActionCreators(tasks, dispatch)
  })
)(Tasks)
