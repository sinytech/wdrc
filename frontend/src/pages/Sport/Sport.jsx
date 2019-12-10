import React, { Fragment, useState, useEffect } from 'react'
import { debounce } from 'lodash'

import {
  Heading,
  Container,
  InputField,
  Loader
} from '../../components'

import { Sport } from './styled'

export default ({
  sport: {
    isFetching,
    teams
  },
  sportActions
}) => {
  const [searchField, setSearchField] = useState('')

  const handleSearch = debounce((value) => {
    setSearchField(value)

    sportActions.findTeams(value)
  }, 1000)

  useEffect(() => {
    return () => {
      sportActions.resetTeams()
    }
  }, [])

  return (
    <Sport>
      <Heading level={2}>Sport</Heading>

      <Container>
        <Sport.Search>
          <InputField
            placeholder='Input team name'
            onChange={(e) => handleSearch(e.target.value)}
          />
        </Sport.Search>

        { !isFetching
          ? <Fragment>
              { !!(searchField && teams.length) &&
                <Sport.Label>These teams you won against:</Sport.Label> }

              <Sport.List>
                { teams.map((item, i) => (
                  <Sport.Item key={i}>{ item.team }</Sport.Item>
                )) }
              </Sport.List>
            </Fragment>
          : searchField && <Loader /> }
      </Container>
    </Sport>
  )
}
