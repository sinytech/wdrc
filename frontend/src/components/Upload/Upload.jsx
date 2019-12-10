import React, { forwardRef } from 'react'

import { plus } from '../../assets/images'

import { Upload } from './styled'

export default forwardRef(({ size, src, ...rest }, ref) => {
  return (
    <Upload>
      <Upload.Label
        htmlFor='upload'
        src={plus}
        size={size}
      >
        <Upload.Input
          id='upload'
          ref={ref}
          type='file'
          hidden
          { ...rest }
        />

        { src && <Upload.Image src={src} /> }
      </Upload.Label>
    </Upload>
  )
})
