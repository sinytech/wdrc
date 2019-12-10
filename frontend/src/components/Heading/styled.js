import styled, { css } from 'styled-components/macro'

import { colors } from '../../styles/variables'

const Heading = styled.div`
  color: ${colors.light};
  margin-bottom: 2rem;

  ${(props) => props.align === 'center' && css`
    text-align: center;
  `}

  ${(props) => props.level === 1 && css`
    font-size: 7.2rem;
  `}

  ${(props) => props.level === 2 && css`
    font-size: 5.4rem;
  `}

  ${(props) => props.level === 3 && css`
    font-size: 3.6rem;
  `}
`

export {
  Heading
}
