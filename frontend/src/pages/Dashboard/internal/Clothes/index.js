import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { clothes } from '../../../../actions'

import Clothes from './Clothes'

export default connect(
  (state) => ({
    clothes: state.clothes
  }),
  (dispatch) => ({
    clothesActions: bindActionCreators(clothes, dispatch)
  })
)(Clothes)
