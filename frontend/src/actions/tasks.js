import { api } from '../api'
import { tasks as consts } from '../constants'

export const fetchTasks = () => async (dispatch) => {
  try {
    dispatch({ type: consts.FETCH_TASKS })

    const response = await api.get('/tasks')

    dispatch({
      type: consts.RECEIVE_TASKS,
      payload: response.data
    })
  } catch (error) {
    console.error(error.message)
  }
}

export const createTask = (data) => async (dispatch) => {
  try {
    dispatch({ type: consts.FETCH_TASKS })

    const response = await api.post('/tasks', data)

    dispatch({
      type: consts.RECEIVE_NEW_TASK,
      payload: response.data
    })
  } catch (error) {
    console.error(error.message)
  }
}

export const updateTask = (id, data) => async (dispatch) => {
  try {
    dispatch({ type: consts.FETCH_TASKS })

    const response = await api.put(`/tasks/${id}`, data)

    dispatch({
      type: consts.RECEIVE_UPDATE_TASK,
      payload: response.data
    })
  } catch (error) {
    console.error(error.message)
  }
}

export const removeTask = (id) => async (dispatch) => {
  try {
    dispatch({ type: consts.FETCH_TASKS })

    await api.delete(`/tasks/${id}`)

    dispatch({
      type: consts.REMOVE_TASK,
      payload: id
    })
  } catch (error) {
    console.error(error.message)
  }
}
