import React from 'react'

import {deviceSize} from 'styles/constants'
import PageTitle from 'components/PageTitle'
import OrderCard from 'components/OrderCard'
import Button from 'components/Button'
import Address from 'components/Address'
import GenderType from 'components/GenderType'
import Payment from 'components/Payment'
import OrderDescription from 'components/OrderDescription'
import MobileViewForm from './MobileViewForm'
import styled from 'styled-components'



const Wrapper=styled.div`
  
`

export const MobileView = (props) => (
  <Wrapper>
    <PageTitle/>
    <OrderCard isMobile/>
    <MobileViewForm onSubmit={props.onSubmit}/>
    <OrderDescription/>
  </Wrapper>

)

export default MobileView

