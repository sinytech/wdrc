import styled from 'styled-components/macro'

import { images } from '../../assets'

const Main = styled.main`
  min-height: 100vh;
  background: url(${images.overlay}) no-repeat center / cover;
  background-attachment: fixed;
  padding: 3rem;
`

export {
  Main
}
