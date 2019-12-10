import styled from 'styled-components/macro'

import { colors } from '../../styles/variables'

const Input = styled.input`
  width: 0;
  height: 0;
  cursor: pointer;
  position: absolute;
  opacity: 0;
`

const Mark = styled.span`
  width: 5rem;
  height: 5rem;
  background-color: ${colors.light};
  border-radius: .4rem;
  border: .2rem solid ${colors.primary};
  position: absolute;
  top: 0;
  left: 0;

  &:after {
    content: '';
    width: 1.6rem;
    height: 5.6rem;
    border: solid ${colors.gray};
    border-width: 0 .3rem .3rem 0;
    display: none;
    position: absolute;
    right: .2rem;
    top: -1.6rem;
    transform: rotate(45deg);
  }
`

const CheckBox = styled.label`
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  display: block;
  position: relative;
  user-select: none;

  &:hover {
    ${Input} {
      & ~ ${Mark} {
        background-color: rgba(255, 255, 255, .7);
      }
    }
  }

  ${Input} {
    &:checked {
      & ~ ${Mark} {
        background-color: ${colors.light};
      }

      & ~ ${Mark} {
        &:after {
          display: block;
        }
      }
    }
  }
`

export {
  CheckBox,
  Input,
  Mark
}
