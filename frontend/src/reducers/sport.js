import { sport as consts } from '../constants'

const initialState = {
  isFetching: false,
  teams: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case consts.FETCH_TEAMS:
      return {
        ...state,
        isFetching: true
      }

    case consts.RECEIVE_TEAMS:
      return {
        isFetching: false,
        teams: action.payload
      }

    case consts.RESET_TEAMS:
      return {
        isFetching: false,
        teams: []
      }

    default:
      return state
  }
}
