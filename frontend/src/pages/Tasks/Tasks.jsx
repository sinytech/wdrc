import React, { useState, useEffect, useCallback } from 'react'
import { debounce } from 'lodash'

import {
  Heading,
  InputField,
  CheckBox
} from '../../components'

import { Tasks } from './styled'

export default ({
  tasks: {
    data
  },
  tasksActions
}) => {
  const [tasksList, setTasksList] = useState(data)

  const updateCallback = useCallback(
    debounce((task) => {
      updateTask(task)
    }, 1000), []
  )

  const handleField = (value, index) => {
    const task = tasksList[index]

    task.title = value

    setTasksList([...tasksList])

    updateCallback(task)
  }

  const handleStatus = (value, index) => {
    const task = tasksList[index]

    task.is_finished = value

    setTasksList([...tasksList])

    updateTask(task)
  }

  const createTask = () => {
    tasksActions.createTask({
      title: `Task ${tasksList.length + 1}`
    })
  }

  const updateTask = (task) => {
    tasksActions.updateTask(task._id, {
      title: task.title,
      is_finished: task.is_finished
    })
  }

  const removeTask = (id) => {
    tasksActions.removeTask(id)
  }

  useEffect(() => {
    tasksActions.fetchTasks()
  }, [])

  useEffect(() => {
    setTasksList(data)
  }, [data.length])

  return (
    <Tasks>
      <Heading level={2}>Tasks</Heading>

      <Tasks.Inner>
        <Tasks.List>
          { tasksList.map((item, i) => (
            <Tasks.Item key={i}>
              <Tasks.Field>
                <InputField
                  value={item.title}
                  onChange={(e) => handleField(e.target.value, i)}
                />

                <Tasks.Remove onClick={() => removeTask(item._id)}>Remove</Tasks.Remove>
              </Tasks.Field>

              <Tasks.Item.Status>
                <CheckBox
                  onChange={(e) => handleStatus(e.target.checked, i)}
                  checked={item.is_finished}
                />
              </Tasks.Item.Status>
            </Tasks.Item>
          )) }
        </Tasks.List>

        <Tasks.Create onClick={createTask} />
      </Tasks.Inner>
    </Tasks>
  )
}
