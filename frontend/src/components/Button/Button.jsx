import React from 'react'

import { Button } from './styled'

export default ({ type, children, ...rest }) => {
  return (
    <Button
      className='btn'
      type={type}
      { ...rest }
    >
      { children }
    </Button>
  )
}
