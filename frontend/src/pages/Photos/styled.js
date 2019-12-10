import styled from 'styled-components/macro'
import { rgba } from 'polished'

import { remove } from '../../assets/images'

import { colors } from '../../styles/variables'

const Photos = styled.div`
`

Photos.List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
  grid-column-gap: 6rem;
  grid-row-gap: 6rem;
`

Photos.Remove = styled.div`
  width: 100%;
  height: 100%;
  background: ${rgba(colors.dark, .3)} url(${remove}) no-repeat center / 5rem;
  border-radius: .4rem;
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
`

Photos.Item = styled.div`
  height: 25rem;
  border-radius: .4rem;
  border: .1rem solid ${colors.primary};
  background: ${colors.light} url(${({ thumbnail }) => thumbnail}) no-repeat center / cover;
  transition: .3s ease-in;
  position: relative;

  &:hover {
    ${Photos.Remove} {
      opacity: 1;
    }
  }
`

export {
  Photos
}
