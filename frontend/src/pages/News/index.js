import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { news } from '../../actions'

import News from './News'

export default connect(
  (state) => ({
    news: state.news
  }),
  (dispatch) => ({
    newsActions: bindActionCreators(news, dispatch)
  })
)(News)
