import styled from 'styled-components/macro'

import { colors } from '../../styles/variables'

const InputField = styled.input`
  width: 100%;
  border: 0;
  border-bottom: .2rem solid ${colors.light};
  background-color: transparent;
  color: ${colors.light};
  padding: 1.6rem 0;
  outline: none;

  &::placeholder {
    color: ${colors.light};
  }
`

export {
  InputField
}
