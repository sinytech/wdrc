import { api } from '../api'
import { photos as consts } from '../constants'

export const fetchPhotos = () => async (dispatch) => {
  try {
    dispatch({ type: consts.FETCH_PHOTOS })

    const response = await api.get('/files')

    dispatch({
      type: consts.RECEIVE_PHOTOS,
      payload: response.data
    })
  } catch (error) {
    console.error(error.message)
  }
}

export const uploadPhoto = (data) => async (dispatch) => {
  try {
    dispatch({ type: consts.FETCH_PHOTOS })

    const response = await api.post('/files', data)

    dispatch({
      type: consts.RECEIVE_NEW_PHOTO,
      payload: response.data
    })
  } catch (error) {
    console.error(error.message)
  }
}

export const removePhoto = (id) => async (dispatch) => {
  try {
    dispatch({ type: consts.FETCH_PHOTOS })

    await api.delete(`/files/${id}`)

    dispatch({
      type: consts.REMOVE_PHOTO,
      payload: id
    })
  } catch (error) {
    console.error(error.message)
  }
}
