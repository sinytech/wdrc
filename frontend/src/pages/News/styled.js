import styled from 'styled-components/macro'

import { colors } from '../../styles/variables'

const News = styled.div`
`

News.Inner = styled.div`
  text-align: center;
`

News.Image = styled.img`
  max-width: 50rem;
  width: 100%;
  border: .1rem solid ${colors.primary};
  margin-bottom: 1.6rem;
`

News.Text = styled.p`
  color: ${colors.light};
  line-height: 1.6;
  text-align: left;
`

export {
  News
}
