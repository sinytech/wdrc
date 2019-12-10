import React, { useState, useEffect, useRef } from 'react'
import Compressor from 'compressorjs'

import {
  Container,
  Heading,
  Upload
} from '../../components'

import { Photos } from './styled'

export default ({
  photos: {
    data
  },
  photosActions
}) => {
  const [photosList, setPhotos] = useState(data)
  const uploadField = useRef(null)

  const imageCompressor = (files, index = 0) => {
    if (index === files.length) {
      uploadField.current.value = ''

      return
    }

    new Compressor(files[index], {
      width: 280,
      maxHeight: 280,
      success(result) {
        const formData = new FormData()

        formData.append('file', result, result.name)

        photosActions.uploadPhoto(formData)

        imageCompressor(files, index + 1)
      },
      error(err) {
        console.error(err.message)
      }
    })
  }

  const handlePhotos = (e) => {
    const files = [...e.target.files]

    imageCompressor(files)
  }

  const removePhoto = (id) => {
    photosActions.removePhoto(id)
  }

  useEffect(() => {
    photosActions.fetchPhotos()
  }, [])

  useEffect(() => {
    setPhotos(data)
  }, [data.length])

  return (
    <Photos>
      <Container>
        <Heading level={1} align='center'>Photos</Heading>

        <Photos.List>
          <Upload
            ref={uploadField}
            onChange={handlePhotos}
            accept='image/*'
            multiple
          />

          { photosList.map((item, i) => (
            <Photos.Item key={i} thumbnail={item.path}>
              <Photos.Remove onClick={() => removePhoto(item._id)} />
            </Photos.Item>
          )) }
        </Photos.List>
      </Container>
    </Photos>
  )
}
