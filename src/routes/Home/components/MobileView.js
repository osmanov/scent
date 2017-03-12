import React from 'react'

import {deviceSize} from 'styles/constants'
import PageTitle from 'components/PageTitle'
import OrderCard from 'components/OrderCard'
import OrderDescription from 'components/OrderDescription'
import MobileViewForm from './MobileViewForm'



export const MobileView = (props) => (
  <div>
    <PageTitle/>
    <OrderCard isMobile/>
    <MobileViewForm onSubmit={props.onSubmit}/>
    <OrderDescription/>
  </div>

)

export default MobileView

