import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { photos } from '../../../../actions'

import Photos from './Photos'

export default connect(
  (state) => ({
    photos: state.photos
  }),
  (dispatch) => ({
    photosActions: bindActionCreators(photos, dispatch)
  })
)(Photos)
