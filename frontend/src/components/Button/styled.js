import styled, { css } from 'styled-components/macro'
import { lighten, darken } from 'polished'

import { colors } from '../../styles/variables'

const Button = styled.button`
  border: 0;
  border-radius: 3rem;
  background-color: ${colors.dark};
  color: ${colors.light};
  cursor: pointer;
  font-weight: 500;
  outline: none;
  padding: 1.6rem 4rem;

  ${(props) => props.type === 'primary' && css`
    background-color: ${colors.primary};
    color: ${colors.dark};

    &:hover {
      background-color: ${lighten(0.04, colors.primary)};
    }

    &:active {
      background-color: ${darken(0.04, colors.primary)};
    }
  `}
`

export {
  Button
}
