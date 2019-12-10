import styled from 'styled-components/macro'
import Formsy from 'formsy-react'

import { colors } from '../../styles/variables'

const Login = styled.div`
  min-height: calc(100vh - 6rem);
  display: flex;
  justify-content: center;
  align-items: center;
`

Login.Form = styled(Formsy)`
  max-width: 76rem;
  width: 100%;
`

Login.Group = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 0;

  .form-group {
    max-width: 30rem;
    width: 100%;
  }
`

Login.Submit = styled.div`
  margin-top: 10rem;
  text-align: center;

  .btn {
    max-width: 24rem;
    width: 100%;
  }
`

Login.New = styled.div`
  color: ${colors.light};
  font-size: 2.1rem;
  margin-top: 2rem;
`

export {
  Login
}
