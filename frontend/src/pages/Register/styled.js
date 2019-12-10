import styled from 'styled-components/macro'
import Formsy from 'formsy-react'

import { colors } from '../../styles/variables'

const Register = styled.div`
  min-height: calc(100vh - 6rem);
  display: flex;
  justify-content: center;
  align-items: center;
`

Register.Form = styled(Formsy)`
  max-width: 76rem;
  width: 100%;
`

Register.Group = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 0;

  .form-group {
    max-width: 30rem;
    width: 100%;
  }
`

Register.Upload = styled.div`
  width: 30rem;
  margin: 0 auto;
`

Register.Upload.Error = styled.div`
  color: ${colors.red};
  display: ${({ visible }) => visible ? 'block' : 'none'};
  font-size: 1.4rem;
  margin: .8rem 0;
`

Register.Submit = styled.div`
  margin-top: 10rem;
  text-align: center;

  .btn {
    max-width: 24rem;
    width: 100%;
  }
`

export {
  Register
}
