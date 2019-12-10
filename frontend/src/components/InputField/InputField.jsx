import React, { forwardRef } from 'react'

import { InputField } from './styled'

export default forwardRef(({ value, type, ...rest }, ref) => {
  return (
    <InputField
      ref={ref}
      className='form-control'
      type={type || 'text'}
      value={value}
      { ...rest }
    />
  )
})
