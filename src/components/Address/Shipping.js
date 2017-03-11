import React from 'react'
import { Field } from 'redux-form'
import Input from 'components/FormFields/Input'
import Select from 'components/FormFields/Select'
import WrapperHalf from './WrapperHalf'
import InputThirdPart from './InputThirdPart'
import ZipCityStateWrapper from './ZipCityStateWrapper'
import SelectCenterPart from './SelectCenterPart'
import { media } from 'styles/utils'
import styled from 'styled-components'

const WrapperFields=styled.div`
  margin-bottom:20px;
`


const Shipping = (props) => (
  <div>
    <WrapperHalf>
      <Field
        name='shippingStreetAddress'
        component={Input}
        placeholder='Street address' />
      <Field
        name='shippingAptSuite'
        component={InputThirdPart}
        placeholder='Apt/Suite(Optional)' />
    </WrapperHalf>
    {props.isMobile ? <WrapperFields>
    <Field
      name='shippingZipCode'
      component={Input}
      placeholder='ZIP' />
  </WrapperFields> :
    <ZipCityStateWrapper>
      <Field
        name='shippingZipCode'
        component={Input}
        placeholder='ZIP' />

      <Field name="shippingCity" component={SelectCenterPart}>
        <option value='New York'>New York</option>
      </Field>

      <Field name="shippingState" component={Select}>
        <option value='New York'>New York</option>
      </Field>
    </ZipCityStateWrapper>}
    <WrapperFields>
      <Field
        name='shippingCountry'
        component={Input}
        placeholder='Country' />
    </WrapperFields>
  </div>
)

Shipping.propTypes = {
  isMobile: React.PropTypes.bool
}

Shipping.defaultProps = {
  isMobile:false
}

export default Shipping
