import React from 'react'
import styled from 'styled-components'
import { media } from 'styles/utils'

const Pic=styled.div`
  margin:inherit;
  width:68px;  
  height:308px;
  background:100% 100% no-repeat url(https://cdn.scentbird.com/assets/content/payment-page/blackcase-9f54479f648ceda1e1faabe906d19f3d.png);
  background-size: cover;
  ${media.mobile`
     width:41px;  
     height:185px;
  `}
`
export default Pic
