import React from 'react'
import styled from 'styled-components'
import { media } from 'styles/utils'

const ZipCityStateWrapper=styled.div`
  display:flex;
  justify-content:space-between;
  margin-bottom:20px;
  ${media.mobile`
    flex-direction:column;
      &>div{
        margin-top:20px;
      }
      &>div:first-child{
        margin-top:0;
      }
      
  `}
`
export default ZipCityStateWrapper


