import React from 'react'
import styled from 'styled-components'
import { Field } from 'redux-form'
import Input from 'components/FormFields/Input'
import Shipping from './Shipping'
import Billing from './Billing'
import { media } from 'styles/utils'


const Wrapper=styled.div`
  background:grey;
 
`

const WrapperName=styled.div`
  display:flex;
  justify-content:space-between;
  ${media.mobile`
    flex-direction:column;
  `}
`

const InputLastName=styled(Input)`
  margin-left:20px;
  ${media.mobile`
     margin-left:0;
  `}
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
      <Wrapper>
        <h3>Shipping address</h3>
        <div>
          <WrapperName>
            <Field
              name='firstName'
              component={Input}
              placeholder='First name' />
            <Field
              name='lastName'
              component={InputLastName}
              placeholder='Last name' />
          </WrapperName>
          <div>
            <Shipping isMobile={this.props.isMobile}/>

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

