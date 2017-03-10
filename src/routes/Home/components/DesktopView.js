import React from 'react'

import {deviceSize} from 'styles/constants'
import PageTitle from 'components/PageTitle'
import OrderCard from 'components/OrderCard'
import CreateAccount from 'components/CreateAccount'
import Address from 'components/Address'
import Payment from 'components/Payment'
import OrderDescription from 'components/OrderDescription'
import styled from 'styled-components'

const Wrapper=styled.div`
 
`


export const DesktopView = () => (
  <Wrapper>
    <div>
      <OrderCard/>
      <OrderDescription/>
    </div>
    <div>
      <PageTitle/>
      <CreateAccount/>
      <Address/>
      <Payment/>
    </div>
  </Wrapper>

)

export default DesktopView

