import React from 'react'
import styled from 'styled-components'
import { Field } from 'redux-form'
import Input from 'components/FormFields/Input'
import Shipping from './Shipping'
import Billing from './Billing'
import WrapperHalf from './WrapperHalf'
import { media } from 'styles/utils'

const InputLastName=styled(Input)`
  margin-left:20px;
  ${media.mobile`
     margin-left:0;
  `}
`
const DescriptionAdvertising=styled.div`
  margin-left:20px;
  width:100%;
  font-size:0.875rem;
`

class Address extends React.Component {
  static propTypes = {
    isMobile: React.PropTypes.bool
  }

  static defaultProps = {
    isMobile:false
  }

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
      <div>
        <h3>Shipping address</h3>
        <div>
          <WrapperHalf>
            <Field
              name='firstName'
              component={Input}
              placeholder='First name' />
            <Field
              name='lastName'
              component={InputLastName}
              placeholder='Last name' />
          </WrapperHalf>
          <div>
            <Shipping isMobile={this.props.isMobile}/>
            <WrapperHalf>
              <Field
                name='phone'
                component={Input}
                placeholder={this.props.isMobile?'Phone number(Optional)':'Mobile number(Optional)'} />
              {!this.props.isMobile && <DescriptionAdvertising>
                We may send you special discounts and offers
              </DescriptionAdvertising>}
            </WrapperHalf>
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
      </div>
    );
  }
}
export default Address

