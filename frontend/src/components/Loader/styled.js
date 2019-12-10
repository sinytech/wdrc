import styled, { css } from 'styled-components/macro'

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${(props) => props.overlay && css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
  `}
`

Loader.Title = styled.div`
  font-size: 24px;
  padding: 3rem 0;
`

export {
  Loader
}
