import React,{PropTypes} from 'react'
import styled from 'styled-components'

import { media } from 'styles/utils'

import Pic from './Pic'
import Сalculation from './Сalculation'
import {color} from 'styles/constants'

const Wrapper=styled.div`
  width:100%;
 
  border:1px solid ${color.mercury};
  margin:0 auto;
  padding:40px 0;
  font-size:0.875rem;
  ${media.mobile`
    border:none;
    margin-bottom:40px;
  `}
`

export const OrderCard = (props) => (
  <Wrapper {...props}>
    <Pic/>
    <Сalculation {...props}/>
  </Wrapper>
)

OrderCard.propTypes = {
  isMobile: PropTypes.bool
}

OrderCard.defaultProps = {
  isMobile: false
}

export default OrderCard
