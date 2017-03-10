import React from 'react'
import styled from 'styled-components'
import { IndexLink, Link } from 'react-router'
import { media } from 'styles/utils'


const Wrapper=styled.div`
  background:grey;
  ${media.mobile`
    width:100%;
  `}
`

export const Address = () => (
  <Wrapper>
    ADDRESS
  </Wrapper>
)

export default Address
