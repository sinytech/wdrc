import { auth as consts } from '../constants'
import { ls } from '../helpers'

const userData = ls.getItem('auth')

const initialState = {
  isFetching: false,
  isLogged: !!userData,
  userData
}

export default (state = initialState, action) => {
  switch (action.type) {
    case consts.FETCH_AUTH:
      return {
        ...state,
        isFetching: true
      }

    case consts.RECEIVE_AUTH_LOGIN:
      return {
        isFetching: false,
        isLogged: true,
        userData: action.payload
      }

    case consts.LOGOUT_AUTH:
      return {
        ...state,
        isLogged: false
      }

    default:
      return state
  }
}
