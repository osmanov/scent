import React from 'react'
import styled from 'styled-components'
import { IndexLink, Link } from 'react-router'
import { media } from 'styles/utils'


const Wrapper=styled.div`
  width:400px;  
  height:600px;
  background:yellow;
  ${media.phone`
    width:100%;
  `}
`

export const OrderCard = () => (
  <Wrapper>
    ORDER CARD
  </Wrapper>
)

export default OrderCard
