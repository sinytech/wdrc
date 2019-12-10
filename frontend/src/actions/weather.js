import { api } from '../api'
import { weather as consts } from '../constants'

export const fetchWeather = ({ lan, lon }) => async (dispatch) => {
  try {
    dispatch({ type: consts.FETCH_WEATHER })

    const response = await api.get(`/weather?lat=${lan}&lon=${lon}`)

    const {
      name,
      main: { temp },
      weather
    } = response.data

    dispatch({
      type: consts.RECEIVE_WEATHER,
      payload: {
        name,
        temp,
        image: `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
      }
    })
  } catch (error) {
    console.error(error.message)
  }
}
