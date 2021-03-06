import React from 'react'
import styled from 'styled-components'

import { media } from 'styles/utils'


import H1 from './H1'
import P from './P'


const Wrapper=styled.div`
  ${media.mobile`
   text-align:center;
   margin-bottom:55px;
  `}
`

export const PageTitle = () => (
  <Wrapper>
    <H1>month-to-month subscription</H1>
    <P>Billed monthly. Renews automatically, cancel any time. Free shipping.</P>
  </Wrapper>
)

export default PageTitle
