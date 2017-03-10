import React,{PropTypes} from 'react'
import styled from 'styled-components'
import { media } from 'styles/utils'
import {color} from 'styles/constants'

const Wrapper=styled.div`
  border-top:1px solid ${color.mercury};
  margin:40px 30px 0;
  padding:5px 0;
`

const Row=styled.div`
  display:flex;
  justify-content: space-between;
  padding:15px 0;
  ${(props) => {
    if(props.isMobile){
      return `color: ${color.doveGray};`
    }
  }}
  ${(props) => {
    if(props.summary){
      return `
        padding:20px 0;
        margin-top:5px;
        border-top:1px solid ${color.mercury};
        text-transform:uppercase;
        font-size:1rem;`
    }else if(props.footer){
      return `
         justify-content: flex-start;
         padding-bottom:0;
         font-size:1rem;`
    }
  }}
`

const Cell=styled.div`
  display:flex;
  align-items: center;
  &>span{
   margin-right:12px;
  }
  ${(props) => {
    if(props.warning){
      return `
      color:${color.wildStrawberry}`;
    }
  }}
  ${(props) => {
    if(props.hackBorder){
      return `border-bottom:1px solid ${color.white}`;
    }
  
  }}
  ${(props) => {
    if(props.dashedBorder){
      return `
       cursor:help;
       border-bottom:1px dashed ${color.alto}`;
    }
  }}
  
`



export const Calculation = (props) => (
  <Wrapper>
    <Row>
      <Cell>
        Monthly subscription
      </Cell>
      <Cell>
        $14.95
      </Cell>
    </Row>
    <Row>
      <Cell>
        Shipping
      </Cell>
      <Cell>
        FREE
      </Cell>
    </Row>
    <Row>
      <Cell>
        Tax
      </Cell>
      <Cell>
        $2.35
      </Cell>
    </Row>
    <Row>
      <Cell>
        Discount
      </Cell>
      <Cell warning>
        -$5
      </Cell>
    </Row>
    <Row>
      <Cell>
        Credit (Balance $100)
      </Cell>
      <Cell>
        <span>$50</span><input type="checkbox"/>
      </Cell>
    </Row>
    <Row summary>
      <Cell>
        total
      </Cell>
      <Cell>
        $25.00
      </Cell>
    </Row>
    <Row {...props} footer>
      <Cell hackBorder>
        Have a&nbsp;
      </Cell>
      <Cell warning={!props.isMobile} dashedBorder>
        coupon code
      </Cell>?
    </Row>
  </Wrapper>
)

Calculation.propTypes = {
  isMobile: PropTypes.bool
}

Calculation.defaultProps = {
  isMobile: false
}

export default Calculation

