import styled from 'styled-components/macro'

import { colors } from '../../styles/variables'

const InputGroupField = styled.div`
`

InputGroupField.Error = styled.div`
  color: ${colors.red};
  font-size: 1.4rem;
  margin: .8rem 0;
`

export {
  InputGroupField
}
