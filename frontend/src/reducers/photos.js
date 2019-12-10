import { photos as consts } from '../constants'

const initialState = {
  isFetching: false,
  data: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case consts.FETCH_PHOTOS:
      return {
        ...state,
        isFetching: true
      }

    case consts.RECEIVE_PHOTOS:
      return {
        isFetching: false,
        data: action.payload
      }

    case consts.RECEIVE_NEW_PHOTO:
      return {
        isFetching: false,
        data: [
          ...state.data,
          action.payload
        ]
      }

    case consts.REMOVE_PHOTO:
      return {
        isFetching: false,
        data: state.data.filter((el) => el._id !== action.payload)
      }

    default:
      return state
  }
}
