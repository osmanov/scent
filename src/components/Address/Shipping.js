import React from 'react'
import { Field } from 'redux-form'
import Input from 'components/FormFields/Input'
import Select from 'components/FormFields/Select'
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

      <Field name="shippingCity" component={Select}>
        <option value='New York'>New York</option>
      </Field>

      <Field name="shippingState" component={Select}>
        <option value='New York'>New York</option>
      </Field>

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
