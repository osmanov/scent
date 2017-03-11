import React from 'react'
import styled from 'styled-components'
import { Field } from 'redux-form'
import Input from 'components/FormFields/Input'
import Select from 'components/FormFields/Select'
import { media } from 'styles/utils'


const Wrapper=styled.div`
  background:tomato;
  ${media.mobile`
    width:100%;
  `}
`

export const Payment = () => (
  <Wrapper>
    Secure credit card payment
    <div>
      <Field
        name='cardNumber'
        component={Input}
        placeholder='Credit card number' />
      <Field
        name='securityCode'
        component={Input}
        placeholder='Security code' />
      <div>
        <Field name="month" component={Select}>
          <option value=''></option>
          <option value='01'>01</option>
          <option value='02'>02</option>
          <option value='03'>03</option>
          <option value='04'>04</option>
          <option value='05'>05</option>
          <option value='06'>06</option>
          <option value='07'>07</option>
          <option value='08'>08</option>
        </Field>
        <Field name="year" component={Select}>
          <option value=''></option>
          <option value='2017'>2017</option>
          <option value='2018'>2018</option>
          <option value='2019'>2019</option>
        </Field>
      </div>
    </div>
  </Wrapper>
)

export default Payment
