import { clothes as consts } from '../constants'

const initialState = {
  isFetching: false,
  data: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case consts.FETCH_CLOTHES:
      return {
        ...state,
        isFetching: true
      }

    case consts.RECEIVE_CLOTHES:
      return {
        isFetching: false,
        data: action.payload
      }

    default:
      return state
  }
}
