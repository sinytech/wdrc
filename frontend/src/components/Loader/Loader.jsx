import React from 'react'

import { Loader } from './styled'

export default ({ title, overlay }) => {
  return (
    <Loader overlay={overlay}>
      <Loader.Title>{ title || 'Loading...' }</Loader.Title>
    </Loader>
  )
}
