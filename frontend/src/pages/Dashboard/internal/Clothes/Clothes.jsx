import React, { Fragment, useEffect } from 'react'
import PieChart from 'react-minimal-pie-chart'

import { Loader } from '../../../../components'

import { Clothes } from './styled'

const chartColors = [
  '#2A6768',
  '#1D3A58',
  '#DD6B47',
  '#7169D5',
  '#B8AE66',
  '#DFA629'
]

export default ({
  clothes: {
    isFetching,
    data
  },
  clothesActions
}) => {
  const countClothes = data.reduce((acc, el) => acc + +el.value, 0)

  useEffect(() => {
    clothesActions.fetchClothes()
  }, [])

  return (
    <Fragment>
      { !isFetching
        ? <Clothes>
            <PieChart
              data={
                data.map((item, i) => ({
                  ...item,
                  title: `${item.title} ${(100 / countClothes * item.value).toFixed(1)}%`,
                  color: chartColors[i]
                }))
              }
            />
          </Clothes>
        : <Loader /> }
      </Fragment>
  )
}
