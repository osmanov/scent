import React from 'react'
import { Field } from 'redux-form'
import Input from 'components/FormFields/Input'
import Select from 'components/FormFields/Select'
import StreetAptWrapper from './StreetAptWrapper'
import InputThirdPart from './InputThirdPart'
import ZipCityStateWrapper from './ZipCityStateWrapper'
import SelectCenterPart from './SelectCenterPart'
import { media } from 'styles/utils'
import styled from 'styled-components'

const Wrapper=styled.div`
  background:grey;
 
`


const Shipping = (props) => (
  <div>
    <StreetAptWrapper>
      <Field
        name='shippingStreetAddress'
        component={Input}
        placeholder='Street address' />
      <Field
        name='shippingAptSuite'
        component={InputThirdPart}
        placeholder='Apt/Suite(Optional)' />
    </StreetAptWrapper>
    {props.isMobile ? <div>
    <Field
      name='shippingZipCode'
      component={Input}
      placeholder='ZIP' />
  </div> :
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
    <div>
      <Field
        name='shippingCountry'
        component={Input}
        placeholder='Country' />
    </div>
  </div>
)

Shipping.propTypes = {
  isMobile: React.PropTypes.bool
}

Shipping.defaultProps = {
  isMobile:false
}

export default Shipping
