import { news as consts } from '../constants'

const initialState = {
  isFetching: false,
  latestNews: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case consts.FETCH_NEWS:
      return {
        ...state,
        isFetching: true
      }

    case consts.RECEIVE_NEWS:
      return {
        isFetching: false,
        latestNews: action.payload
      }

    default:
      return state
  }
}
