import React from 'react'
import styled from 'styled-components'
import { media } from 'styles/utils'

const WrapperHalf=styled.div`
  display:flex;
  justify-content:space-between;
  ${media.mobile`
    flex-direction:column;
  `}
`

export default WrapperHalf