import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

import { colors } from '../../styles/variables'

const Dashboard = styled.div`
`

Dashboard.Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .heading-container {
    width: 100%;
    text-align: center;
  }
`

Dashboard.Avatar = styled.div`
  width: 20rem;
  height: 10rem;
  background: url(${({ src }) => src}) no-repeat center / cover;
  border-radius: .4rem;
  margin-right: 2.4rem;
`

Dashboard.List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
  grid-gap: 6rem;
  margin: 6rem 0;
`

Dashboard.Item = styled.div`
  background-color: rgba(255, 255, 255, .7);
  border: .1rem solid ${colors.primary};
  border-radius: .4rem;
  display: flex;
  flex-direction: column;
`

Dashboard.Item.Title = styled(Link)`
  background-color: ${colors.primary};
  border-radius: .4rem .4rem 0 0;
  color: ${colors.dark};
  display: block;
  font-size: 2.8rem;
  font-weight: 500;
  padding: 1.2rem;
  text-align: center;

  &:hover {
    text-decoration: none;
  }
`

Dashboard.Item.Body = styled.div`
  min-height: 20rem;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 1.6rem;
`

export {
  Dashboard
}
