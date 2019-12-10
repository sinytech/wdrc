import React from 'react';
import { Link } from 'react-router-dom'

import {
  Button,
  InputGroupField,
  Heading
} from '../../components'

import { Login } from './styled'

export default ({ authActions }) => {
  const handleSubmit = (values) => {
    authActions.authLogin(values)
  }

  return (
    <Login>
      <Login.Form onSubmit={handleSubmit}>
        <Heading level={1} align='center'>Dev Challenge</Heading>

        <Login.Group>
          <InputGroupField
            type='email'
            name='email'
            placeholder='Email'
            validations='isEmail'
            validationError='This is not a valid email'
            required
          />

          <InputGroupField
            type='password'
            placeholder='Password'
            name='password'
            validations='minLength:6'
            validationError='The minimum length is 6 characters'
            required
          />
        </Login.Group>

        <Login.Submit>
          <Button type='primary' htmlType='submit'>Login</Button>
          <Login.New>New to the challenge? <Link to='/register'>Sign up</Link></Login.New>
        </Login.Submit>
      </Login.Form>
    </Login>
  )
}
