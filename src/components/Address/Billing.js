import React from 'react'
import { Field } from 'redux-form'
import Input from 'components/FormFields/Input'
import { media } from 'styles/utils'

const Billing = () => (
  <div>
    <div>
      <Field
        name='billingStreetAddress'
        component={Input}
        placeholder='Street address' />
      <Field
        name='billingAptSuite'
        component={Input}
        placeholder='Apt/Suite(Optional)' />
    </div>
    <div>
      <Field
        name='billingZipCode'
        component={Input}
        placeholder='ZIP' />
      <Field
        name='billingCity'
        component={Input}
        placeholder='City' />
      <Field
        name='billingState'
        component={Input}
        placeholder='State' />
    </div>
    <div>
      <Field
        name='billingCountry'
        component={Input}
        placeholder='Country' />
    </div>
  </div>
)
export default Billing
