import React from 'react'

import { Heading } from './styled'

export default ({ children, align, level }) => {
  return (
    <Heading
      className='heading-container'
      align={align}
      level={level}
    >
      { children }
    </Heading>
  )
}
