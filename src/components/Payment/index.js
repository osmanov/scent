import React from 'react'
import styled from 'styled-components'
import { Field } from 'redux-form'
import Input from 'components/FormFields/Input'
import Select from 'components/FormFields/Select'
import { media } from 'styles/utils'


const WrapperExp=styled.div`
  display:flex;
`

const WrapperDesktopCardNum=styled.div`
  display:flex;
`

const InputSecurityCode=styled(Input)`
 width:188px;
 margin-left:20px;
 ${media.mobile`
    width:166px;
     margin-left:0;
  `}
`

const SelectCard=styled(Select)`
   width:140px;
   &:last-child{
     margin-left:20px;
   }
  ${media.mobile`
    width:100%;
    &:last-child{
      margin-left:10px;
    }
  `}
`




class Payment extends React.Component {
  static propTypes = {
    isMobile: React.PropTypes.bool
  }

  static defaultProps = {
    isMobile: false
  }

  _expDate=()=>{
   return <WrapperExp>
      <Field name="month" component={SelectCard}>
        <option value="" disabled >Month</option>
        <option value='01'>01</option>
        <option value='02'>02</option>
        <option value='03'>03</option>
        <option value='04'>04</option>
        <option value='05'>05</option>
        <option value='06'>06</option>
        <option value='07'>07</option>
        <option value='08'>08</option>
      </Field>
      <Field name="year" component={SelectCard}>
        <option value="" disabled >Year</option>
        <option value='2017'>2017</option>
        <option value='2018'>2018</option>
        <option value='2019'>2019</option>
      </Field>
    </WrapperExp>
  }

  _desktop=()=>{
    return <div>
      <WrapperDesktopCardNum>
        <Field
          name='cardNumber'
          component={Input}
          placeholder={this.props.isMobile ? 'Card card number':'Credit card number'} />
        <Field
          name='securityCode'
          component={InputSecurityCode}
          placeholder='Security code' />
      </WrapperDesktopCardNum>
      {this._expDate()}
    </div>
  }

  _mobile=()=>{
    return <div>
      <Field
        name='cardNumber'
        component={Input}
        placeholder={this.props.isMobile ? 'Card card number':'Credit card number'} />
      {this._expDate()}
      <Field
        name='securityCode'
        component={InputSecurityCode}
        placeholder='Security code' />
    </div>
  }

  render() {
    return (
      <div>
        <h3>Secure credit card payment</h3>
        {this.props.isMobile ? this._mobile() : this._desktop()}
      </div>
    );
  }
}



export default Payment
