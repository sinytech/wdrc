import React, { useEffect } from 'react'

import { Loader } from '../../../../components'

import { Photos } from './styled'

export default ({
  photos: {
    isFetching,
    data
  },
  photosActions
}) => {
  useEffect(() => {
    photosActions.fetchPhotos()
  }, [])

  return (
    <Photos>
      { !isFetching
        ? <Photos.List>
            { data.slice(0, 4).map((item, i) => (
              <Photos.Item
                key={i}
                src={item.path}
              />
            )) }
          </Photos.List>
        : <Loader /> }
    </Photos>
  )
}
