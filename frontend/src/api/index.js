import axios from 'axios'

import { ls } from '../helpers'

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 180000
})

api.interceptors.request.use((config) => {
  let auth = ls.getItem('auth')

  if (auth !== null) {
    config.headers.Authorization = auth.token
  }

  return config
})

api.interceptors.response.use(undefined, (err) => {
  if (err.response.status === 401) {
    ls.removeItem('auth')
    window.location = '/login'

    return Promise.reject(err)
  }
})

export {
  api
}
