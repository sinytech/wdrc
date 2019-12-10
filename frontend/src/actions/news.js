import { api } from '../api'
import { news as consts } from '../constants'

export const fetchNews = () => async (dispatch) => {
  try {
    dispatch({ type: consts.FETCH_NEWS })

    const response = await api.get('/news')

    const {
      item: {
        title,
        content
      },
      image
    } = response.data

    dispatch({
      type: consts.RECEIVE_NEWS,
      payload: {
        title,
        content,
        image: image.url
      }
    })
  } catch (error) {
    console.error(error.message)
  }
}
