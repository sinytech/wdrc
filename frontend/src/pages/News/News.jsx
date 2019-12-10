import React, { useEffect } from 'react'

import {
  Heading,
  Container,
  Loader
} from '../../components'

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
    <News>
      <Heading level={2}>News</Heading>

      <Container>
        { !isFetching
          ? <News.Inner>
              <News.Image src={latestNews.image} alt='' />
              <Heading level={3}>{ latestNews.title }</Heading>
              <News.Text>{ latestNews.content }</News.Text>
            </News.Inner>
          : <Loader /> }
      </Container>
    </News>
  )
}
