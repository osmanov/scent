import { injectGlobal } from 'styled-components'
import { color } from './constants'


/* eslint no-unused-expressions: 0 */
injectGlobal`
p {
  color: ${color.black};
}
`
