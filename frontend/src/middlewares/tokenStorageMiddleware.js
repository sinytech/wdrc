import { auth as consts } from '../constants'

import { ls } from '../helpers'

const tokenStorageMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case consts.RECEIVE_AUTH_LOGIN:
      ls.setItem('auth', action.payload)
      break

    case consts.LOGOUT_AUTH:
      ls.removeItem('auth')
      break

    default:
      // do nothing
  }

  next(action)
}

export default tokenStorageMiddleware
