import React, { useRef, useState } from 'react';

import {
  Button,
  InputGroupField,
  Heading,
  Upload
} from '../../components'

import { Register } from './styled'

export default ({ authActions }) => {
  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [uploadError, setUploadError] = useState(false)
  const uploadField = useRef(null)

  const handleImage = (e) => {
    const file = e.target.files[0]

    setImage(file)
    setImagePreview(URL.createObjectURL(file))
    setUploadError(false)
  }

  const handleSubmit = (values) => {
    const formData = new FormData()

    formData.append('file', image)

    Object.keys(values).map((key) => {
      formData.append(key, values[key])
    })

    if (image) {
      authActions.authRegister(formData)
    } else {
      setUploadError(true)
    }
  }

  return (
    <Register>
      <Register.Form onSubmit={handleSubmit}>
        <Heading level={1} align='center'>Dev Challenge</Heading>

        <Register.Group>
          <InputGroupField
            name='username'
            placeholder='Username'
            validations='minLength:6'
            validationError='The minimum length is 6 characters'
            required
          />

          <InputGroupField
            type='email'
            name='email'
            placeholder='Email'
            validations='isEmail'
            validationError='This is not a valid email'
            required
          />
        </Register.Group>

        <Register.Group>
          <InputGroupField
            type='password'
            name='password'
            placeholder='Password'
            validations='minLength:6'
            validationError='The minimum length is 6 characters'
            required
          />

          <InputGroupField
            type='password'
            name='confirmPassword'
            placeholder='Confirm password'
            validations='equalsField:password'
            validationError='Passwords do not match'
            required
          />
        </Register.Group>

        <Register.Upload>
          <Upload
            src={imagePreview}
            ref={uploadField}
            onChange={handleImage}
            accept='image/*'
            size='20rem'
          />

          <Register.Upload.Error visible={uploadError}>
            You have not uploaded an avatar
          </Register.Upload.Error>
        </Register.Upload>

        <Register.Submit>
          <Button type='primary' htmlType='submit'>Register</Button>
        </Register.Submit>
      </Register.Form>
    </Register>
  )
}
