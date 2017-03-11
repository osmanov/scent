import React from 'react'
import { Field } from 'redux-form'
import Input from 'components/FormFields/Input'
import { media } from 'styles/utils'

const Shipping = () => (
  <div>
    <div>
      <Field
        name='shippingStreetAddress'
        component={Input}
        placeholder='Street address' />
      <Field
        name='shippingAptSuite'
        component={Input}
        placeholder='Apt/Suite(Optional)' />
    </div>
    <div>
      <Field
        name='shippingZipCode'
        component={Input}
        placeholder='ZIP' />
      <Field
        name='shippingCity'
        component={Input}
        placeholder='City' />
      <Field
        name='shippingState'
        component={Input}
        placeholder='State' />
    </div>
    <div>
      <Field
        name='shippingCountry'
        component={Input}
        placeholder='Country' />
    </div>
  </div>
)
export default Shipping
