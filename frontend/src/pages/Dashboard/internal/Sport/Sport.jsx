import React, { Fragment, useEffect } from 'react'

import { ls } from '../../../../helpers'

import { Loader } from '../../../../components'

import { Sport } from './styled'

export default ({
  sport: {
    isFetching,
    teams
  },
  sportActions
}) => {
  const team = ls.getItem('sport')
  const goals = teams.reduce((acc, el) => acc + +el.goals, 0)

  useEffect(() => {
    sportActions.findTeams(team)

    return () => {
      sportActions.resetTeams()
    }
  }, [])

  return (
    <Fragment>
      { !isFetching
        ? <Sport>
            <Sport.Title>{ team || 'Choose your favorite team' }</Sport.Title>

            { team &&
              <Sport.Text>{`A team did very well at something. They scored ${goals} goals`}</Sport.Text> }
          </Sport>
        : <Loader /> }
    </Fragment>
  )
}
