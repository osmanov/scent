import React from 'react'
import { Field } from 'redux-form'
import Input from 'components/FormFields/Input'
import Select from 'components/FormFields/Select'
import InputThirdPart from './InputThirdPart'
import WrapperHalf from './WrapperHalf'
import SelectCenterPart from './SelectCenterPart'
import ZipCityStateWrapper from './ZipCityStateWrapper'
import { media } from 'styles/utils'

const Billing = () => (
  <div>
    <h3>Billing address</h3>
    <WrapperHalf>
      <Field
        name='billingStreetAddress'
        component={Input}
        placeholder='Street address' />
      <Field
        name='billingAptSuite'
        component={InputThirdPart}
        placeholder='Apt/Suite(Optional)' />
    </WrapperHalf>
    <ZipCityStateWrapper>
      <Field
        name='billingZipCode'
        component={Input}
        placeholder='ZIP' />
      <Field name="billingCity" component={SelectCenterPart}>
        <option value='New York'>New York</option>
      </Field>
      <Field name="billingState" component={Select}>
        <option value='New York'>New York</option>
      </Field>
    </ZipCityStateWrapper>
    <div>
      <Field
        name='billingCountry'
        component={Input}
        placeholder='Country' />
    </div>
  </div>
)
export default Billing
