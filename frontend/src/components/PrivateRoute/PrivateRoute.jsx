import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { Main } from '../'

export default ({
  component: Component,
  auth,
  meta,
  ...rest
}) => {
  return auth.isLogged
    ? <Route
      {...rest}
      render={(props) => (
        <Main>
          <Component {...props} />
        </Main>
      )}
    />
    : <Redirect to='/login' />
}
