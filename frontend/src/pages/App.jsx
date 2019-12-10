import React, { Suspense, lazy } from 'react'
import { Switch, Router, Redirect } from 'react-router-dom'
import history from '../helpers/history'

import {
  PublicRoute,
  PrivateRoute,
  Loader
} from '../components'

const Login = lazy(() => import('./Login'))
const Register = lazy(() => import('./Register'))
const Dashboard = lazy(() => import('./Dashboard'))
const Sport = lazy(() => import('./Sport'))
const News = lazy(() => import('./News'))
const Photos = lazy(() => import('./Photos'))
const Tasks = lazy(() => import('./Tasks'))

export default function App () {
  return (
    <Router history={history}>
      <Suspense fallback={<Loader overlay />}>
        <Switch>
          <PrivateRoute path='/' component={Dashboard} exact />
          <PrivateRoute path='/sport' component={Sport} />
          <PrivateRoute path='/news' component={News} />
          <PrivateRoute path='/photos' component={Photos} />
          <PrivateRoute path='/tasks' component={Tasks} />

          <PublicRoute path='/login' component={Login} />
          <PublicRoute path='/register' component={Register} />

          <Redirect from='*' to='/' />
        </Switch>
      </Suspense>
    </Router>
  )
}
