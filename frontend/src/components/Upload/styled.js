import styled from 'styled-components'
import { colors } from '../../styles/variables'

const Upload = styled.div`
`

Upload.Input = styled.input`
`

Upload.Label = styled.label`
  width: 100%;
  height: ${({ size }) => size || '25rem'};
  border-radius: .4rem;
  background: ${({ src }) => src ? 'rgba(255, 255, 255, .3)' : colors.light} url(${({ src }) => src}) no-repeat center / 40%;
  border: .1rem solid ${colors.primary};
  cursor: pointer;
  display: block;
`

Upload.Image = styled.div`
  width: 100%;
  height: 100%;
  background: url(${({ src }) => src}) no-repeat center / cover;
  border: .1rem solid ${colors.primary};
`

export {
  Upload
}
