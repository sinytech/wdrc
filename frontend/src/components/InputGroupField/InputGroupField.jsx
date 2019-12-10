import React from 'react'
import { withFormsy } from 'formsy-react'

import { InputField } from '../'

import { InputGroupField } from './styled'

export default withFormsy((props) => {
  const changeValue = (e) => {
    props.setValue(e.currentTarget.value)
  }

  const errorMessage = props.getErrorMessage()

  return (
    <InputGroupField className='form-group'>
      <InputField
        onChange={changeValue}
        { ...props }
      />

      <InputGroupField.Error>{ errorMessage }</InputGroupField.Error>
    </InputGroupField>
  )
})
