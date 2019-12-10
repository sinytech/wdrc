import styled from 'styled-components/macro'

import { colors } from '../../styles/variables'

const Sport = styled.div`
`

Sport.Search = styled.div`
  text-align: center;

  .form-control {
    max-width: 55rem;
    border-bottom-width: .2rem;
    font-size: 5.4rem;
    text-align: center;
  }
`

Sport.List = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  margin: 3rem 0;
`

Sport.Item = styled.li`
  color: ${colors.light};
  font-size: 2.4rem;
  margin: 0.8rem 0;
`

Sport.Label = styled.div`
  color: ${colors.light};
  font-size: 1.8rem;
  margin-top: 2.4rem;
`

export {
  Sport
}
