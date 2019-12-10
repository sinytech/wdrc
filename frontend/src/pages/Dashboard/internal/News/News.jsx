import React, { Fragment, useEffect } from 'react'

import { Loader } from '../../../../components'

import { News } from './styled'

export default ({
  news: {
    isFetching,
    latestNews
  },
  newsActions
}) => {
  useEffect(() => {
    newsActions.fetchNews()
  }, [])

  return (
    <Fragment>
      { !isFetching
        ? <News>
            <News.Title>{ latestNews.title }</News.Title>
            <News.Text>{ latestNews.content }</News.Text>
          </News>
        : <Loader /> }
    </Fragment>
  )
}
