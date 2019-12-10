import { api } from '../api'
import { auth as consts } from '../constants'

import { history } from '../helpers'

export const authLogin = (data) => async (dispatch) => {
  try {
    dispatch({ type: consts.FETCH_AUTH })

    const response = await api.post('/auth/signin', data)

    dispatch({
      type: consts.RECEIVE_AUTH_LOGIN,
      payload: response.data
    })
  } catch (error) {
    console.error(error.message)
  }
}

export const authRegister = (data) => async (dispatch) => {
  try {
    dispatch({ type: consts.FETCH_AUTH })

    const response = await api.post('/auth/signup', data)

    if (response.status === 201) {
      history.push('/login')
    }

  } catch (error) {
    console.error(error.message)
  }
}
