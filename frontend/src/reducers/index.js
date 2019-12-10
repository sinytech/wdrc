import { combineReducers } from 'redux'

import auth from './auth'
import tasks from './tasks'
import news from './news'
import clothes from './clothes'
import weather from './weather'
import sport from './sport'
import photos from './photos'

const reducers = combineReducers({
  auth,
  tasks,
  news,
  clothes,
  weather,
  sport,
  photos
})

export default reducers
