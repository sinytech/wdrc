import { api } from '../api'
import { clothes as consts } from '../constants'

export const fetchClothes = () => async (dispatch) => {
  try {
    dispatch({ type: consts.FETCH_CLOTHES })

    const response = await api.get('/clothes')

    dispatch({
      type: consts.RECEIVE_CLOTHES,
      payload: response.data
    })
  } catch (error) {
    console.error(error.message)
  }
}
