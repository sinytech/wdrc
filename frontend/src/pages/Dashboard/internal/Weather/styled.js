import styled from 'styled-components/macro'

const Weather = styled.div`
`

Weather.Temp = styled.div`
  display: flex;
`

Weather.Image = styled.img`
  width: 100%;
  margin-right: 2.4rem;
`

Weather.Degress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2.8rem;
  font-weight: 500;
`

Weather.City = styled.div`
  font-size: 3.6rem;
  font-weight: 500;
  margin-top: 1.2rem;
  text-align: center;
`

export {
  Weather
}
