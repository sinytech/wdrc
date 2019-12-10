import React from 'react'

import { CheckBox, Input, Mark } from './styled'

export default ({ ...rest }) => {
  return (
    <CheckBox className='checkbox-control'>
      <Input
        type='checkbox'
        { ...rest }
      />

      <Mark />
    </CheckBox>
  )
}
