import styled from 'styled-components/macro'

import { plus } from '../../assets/images'

const Tasks = styled.div`
`

Tasks.Inner = styled.div`
  max-width: 90rem;
  margin: 0 auto;
`

Tasks.List = styled.div`
`

Tasks.Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 3rem 0;

  .form-control {
    font-size: 2.4rem;
  }
`

Tasks.Field = styled.div`
  width: 100%;
  text-align: right;
`

Tasks.Remove = styled.a`
  cursor: pointer;
  display: inline-block;
  margin-top: 1rem;
`

Tasks.Item.Status = styled.div`
  margin: 1rem 0 0 3rem;
`

Tasks.Create = styled.a`
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  display: block;
  background: url(${plus}) no-repeat center / contain;
`

export {
  Tasks
}
