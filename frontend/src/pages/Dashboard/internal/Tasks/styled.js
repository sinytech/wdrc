import styled from 'styled-components/macro'

import { colors } from '../../../../styles/variables'

const Tasks = styled.div`
  width: 100%;
  padding: 0 1.6rem;
`

Tasks.List = styled.div`
`

Tasks.Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

Tasks.Item.Title = styled.div`
  width: 100%;
  border-bottom: .2rem solid ${colors.dark};
  font-weight: 500;
  font-size: 1.8;
`

Tasks.Item.Status = styled.div`
  pointer-events: none;
  margin-left: 1rem;
  transform: scale(.5);
`

export {
  Tasks
}
