import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import { tokenStorageMiddleware } from './middlewares'

const middlewares = []

const logger = createLogger({
  timestamp: false,
  duration: true,
  collapsed: true
})

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

middlewares.push(tokenStorageMiddleware)

export default createStore(rootReducer, compose(applyMiddleware(thunk, ...middlewares)))
