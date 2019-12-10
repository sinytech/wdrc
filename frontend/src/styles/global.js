import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

import { colors } from './variables'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap');

  ${styledNormalize}

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
  }

  body {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    color: ${colors.dark};
  }

  a {
    color: ${colors.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`
