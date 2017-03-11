import React from 'react'
import styled from 'styled-components'
import { media } from 'styles/utils'

const WrapperHalf=styled.div`
  display:flex;
  justify-content:space-between;
  margin-bottom:20px;
  
  ${media.mobile`
    flex-direction:column;
    &>div:first-child{
      margin-bottom:20px;
    }
    
  `}
`

export default WrapperHalf
