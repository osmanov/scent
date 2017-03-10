import { injectGlobal } from 'styled-components'
import { media } from './utils'
import { font, color } from './constants'


/* eslint no-unused-expressions: 0 */
injectGlobal`
html {
  font-size: ${font.base.size.desktop}px; 
}

body {
  font-family: ${font.base.local};
  font-size: 1rem;
  line-height: 1.66;
  color: ${color.black}
  line-height:1;
}

body.fontLoaded {
  font-family: ${font.base.remote};
}

#container {
  min-height: 100%;
  min-width: 100%;
}

img {
  max-width: 100%;
}

a{
  color: ${color.dustyGray};
  display:inline-block;
  &:hover {
    color: ${color.wildStrawberry};
  }
}

h1{
  font-size: 2rem;
  
  ${media.mobile`
    font-size: 1.375rem;
  `}
}

`
