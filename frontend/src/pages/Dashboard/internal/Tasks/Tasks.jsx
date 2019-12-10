import React, { useEffect } from 'react'

import {
  Loader,
  CheckBox
} from '../../../../components'

import { Tasks } from './styled'

export default ({
  tasks: {
    isFetching,
    data
  },
  tasksActions
}) => {
  useEffect(() => {
    tasksActions.fetchTasks()
  }, [])

  return (
    <Tasks>
      { !isFetching
        ? <Tasks.List>
            { data.slice(0, 3).map((item, i) => (
              <Tasks.Item key={i}>
                <Tasks.Item.Title>{ item.title }</Tasks.Item.Title>

                <Tasks.Item.Status>
                  <CheckBox defaultChecked={item.is_finished} />
                </Tasks.Item.Status>
              </Tasks.Item>
            )) }
          </Tasks.List>
        : <Loader /> }
    </Tasks>
  )
}
