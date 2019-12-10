import React from 'react'

import {
  Container,
  Heading
} from '../../components'

import {
  Weather,
  News,
  Clothes,
  Tasks,
  Photos,
  Sport
} from './internal'

import { Dashboard } from './styled'

const dashboardList = [
  {
    title: 'Weather',
    link: '/',
    content: <Weather />
  },
  {
    title: 'News',
    link: '/news',
    content: <News />
  },
  {
    title: 'Sport',
    link: '/sport',
    content: <Sport />
  },
  {
    title: 'Photos',
    link: '/photos',
    content: <Photos />
  },
  {
    title: 'Tasks',
    link: '/tasks',
    content: <Tasks />
  },
  {
    title: 'Clothes',
    link: '/',
    content: <Clothes />
  }
]

export default ({
  auth: { userData }
}) => {
  return (
    <Dashboard>
      <Dashboard.Heading>
        { userData.avatar &&
          <Dashboard.Avatar src={userData.avatar.path} /> }

        <Heading level={1} align='center'>Good day { userData.username }</Heading>
      </Dashboard.Heading>

      <Container>
        <Dashboard.List>
          { dashboardList.map((item, i) => (
            <Dashboard.Item key={i}>
              <Dashboard.Item.Title to={item.link}>{ item.title }</Dashboard.Item.Title>

              <Dashboard.Item.Body>
                { item.content }
              </Dashboard.Item.Body>
            </Dashboard.Item>
          )) }
        </Dashboard.List>
      </Container>
    </Dashboard>
  )
}
