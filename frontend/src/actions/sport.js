import { api } from '../api'
import { sport as consts } from '../constants'

import { ls } from '../helpers'

export const findTeams = (team) => async (dispatch) => {
  try {
    dispatch({ type: consts.FETCH_TEAMS })

    if (!team) {
      dispatch({
        type: consts.RECEIVE_TEAMS,
        payload: []
      })

      return
    }

    const response = await api.get(`/sport?team=${team}`)

    if (response.data.length) {
      ls.setItem('sport', team)
    }

    dispatch({
      type: consts.RECEIVE_TEAMS,
      payload: response.data
    })
  } catch (error) {
    console.error(error.message)
  }
}

export const resetTeams = () => (dispatch) => {
  dispatch({
    type: consts.RESET_TEAMS
  })
}
