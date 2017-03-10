import React from 'react'
import styled from 'styled-components'
import { media } from 'styles/utils'
import NormalImg from 'components/Img'


const Wrapper=styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  font-size:0.875rem;
 
  ${media.mobile`
   font-size:1rem;
  `}
`

const Img = styled(NormalImg)`
  width:367px;
  height:239px;
  margin-top:25px;
  ${media.mobile`
    order: 2;
    width:280px;
    height:183px;
    margin:0 0 380px;
  `}
`

const P = styled.p`
   margin:25px 0;
   line-height:1.5;
   ${media.mobile`
    order: 1;
    line-height:1.2;
  `}
`


export const OrderDescription = () => (
  <Wrapper>
    <Img src='https://cdn.scentbird.com/assets/content/payment-page/rules@2x-95e06b3c71b6234f3bc60f3cf77e155a.png' alt="scentbird" />
    <P>
      You will receive an email confirmation when recipient accepts your gift. Scentbird ships between the 15th and the 18th of every month. Recipient will receive an email confirmation of shipment every month. Please allow 5-7 days for delivery.
    </P>
  </Wrapper>
)

export default OrderDescription
