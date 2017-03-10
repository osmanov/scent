import React from 'react'

import {deviceSize,color} from 'styles/constants'
import PageTitle from 'components/PageTitle'
import OrderCard from 'components/OrderCard'
import CreateAccount from 'components/CreateAccount'
import Address from 'components/Address'
import Payment from 'components/Payment'
import OrderDescription from 'components/OrderDescription'
import styled from 'styled-components'

const Wrapper=styled.div`
 display:flex;
 justify-content:flex-start;
`

const Left=styled.div`
  border:1px solid ${color.mercury};
`

const Right=styled.div`
 flex-grow:2;
`


export const DesktopView = () => (
  <Wrapper>
    <Left>
      <OrderCard/>
      <OrderDescription/>
    </Left>
    <Right>
      <PageTitle/>
      <CreateAccount/>
      <Address/>
      <Payment/>
    </Right>
  </Wrapper>

)

export default DesktopView

