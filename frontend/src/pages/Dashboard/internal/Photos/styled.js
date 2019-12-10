import styled from 'styled-components/macro'

import { colors } from '../../../../styles/variables'

const Photos = styled.div`
  width: 100%;
`

Photos.List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`

Photos.Item = styled.div`
  height: 10rem;
  background: ${colors.light} url(${(props) => props.src}) no-repeat center / cover;
  border: .1rem solid ${colors.primary};
  border-radius: .4rem;
`

export {
  Photos
}
