import React,{PropTypes} from 'react'
import styled from 'styled-components'

import { media } from 'styles/utils'

import Pic from './Pic'
import Сalculation from './Сalculation'


const Wrapper=styled.div`
  width: ${(props) => {
    const result = props.isMobile ? '100%' : '340px'
    return `${result};`
  }}
  margin:0 auto;
  padding:40px 0;
  font-size:0.875rem;
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
