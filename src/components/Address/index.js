import React from 'react'
import styled from 'styled-components'
import { Field } from 'redux-form'
import Input from 'components/FormFields/Input'
import Shipping from './Shipping'
import Billing from './Billing'
import { media } from 'styles/utils'


const Wrapper=styled.div`
  background:grey;
  ${media.mobile`
    width:100%;
  `}
`

class Address extends React.Component {
  state = {
    billingIsShipping: true
  }

  _toggleCheckbox=(e)=>{
    this.setState({
      billingIsShipping: !this.state.billingIsShipping
    });
  }

  render() {
    return (
      <Wrapper>
        ADDRESS
        <div>
          <div>
            <Field
              name='firstName'
              component={Input}
              placeholder='First name' />
            <Field
              name='lastName'
              component={Input}
              placeholder='Last name' />
          </div>
          <div>
            <Shipping/>

            <div>
              <Field
                name='phone'
                component={Input}
                placeholder='Mobile number(Optional)' />
            </div>
            <label>
              Use this address as my billing address:
              <input
                name="billingIsShipping"
                type="checkbox"
                checked={this.state.billingIsShipping}
                onChange={this._toggleCheckbox} />
            </label>
            {!this.state.billingIsShipping && <Billing/>}
          </div>
        </div>
      </Wrapper>
    );
  }
}
export default Address

