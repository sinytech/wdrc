import { tasks as consts } from '../constants'

const initialState = {
  isFetching: false,
  data: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case consts.FETCH_TASKS:
      return {
        ...state,
        isFetching: true
      }

    case consts.RECEIVE_TASKS:
      return {
        isFetching: false,
        data: action.payload
      }

    case consts.RECEIVE_NEW_TASK:
      return {
        isFetching: false,
        data: [
          ...state.data,
          action.payload
        ]
      }

    case consts.RECEIVE_UPDATE_TASK:
      return {
        isFetching: false,
        data: state.data.map((item) => {
          if (item._id === action.payload._id) {
            return action.payload
          }

          return item
        })
      }

    case consts.REMOVE_TASK:
      return {
        isFetching: false,
        data: state.data.filter((el) => el._id !== action.payload)
      }

    default:
      return state
  }
}
