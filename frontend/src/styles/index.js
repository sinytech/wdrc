import { breakpoints } from './variables'
import { mediaService } from './utils'
import GlobalStyle from './global'

const media = mediaService(breakpoints)

export {
  GlobalStyle,
  media
}
