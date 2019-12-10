import React, { Fragment, useEffect } from 'react'

import { Loader } from '../../../../components'

import { Weather } from './styled'

export default ({
  weather: {
    isFetching,
    data
  },
  weatherActions
}) => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      weatherActions.fetchWeather({
        lan: coords.latitude,
        lon: coords.longitude,
      })
    })
  }, [])

  return (
    <Fragment>
      { !isFetching
        ? <Weather>
            <Weather.Temp>
              <Weather.Image src={data.image} alt='' />

              <Weather.Degress>
                { data.temp } <span>degrees</span>
              </Weather.Degress>
            </Weather.Temp>

            <Weather.City>{ data.name }</Weather.City>
          </Weather>
        : <Loader /> }
    </Fragment>
  )
}
