import React from 'react'

import {deviceSize} from 'styles/constants'
import PageTitle from 'components/PageTitle'
import OrderCard from 'components/OrderCard'
import Button from 'components/Button'
import Address from 'components/Address'
import GenderType from 'components/GenderType'
import Payment from 'components/Payment'
import OrderDescription from 'components/OrderDescription'
import styled from 'styled-components'



const Wrapper=styled.div`
  
`

export const MobileView = () => (
  <Wrapper>
    <PageTitle/>
    <OrderCard isMobile/>
    <GenderType/>
    <Address/>
    <Payment/>
    <Button/>
    <OrderDescription/>
  </Wrapper>

)

export default MobileView

