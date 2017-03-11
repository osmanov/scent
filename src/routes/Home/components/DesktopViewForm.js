import React from 'react'
import { reduxForm } from 'redux-form'
import {validate} from 'utils'
import styled from 'styled-components'
import CreateAccount from 'components/CreateAccount'
import Address from 'components/Address'
import Payment from 'components/Payment'

const Wrapper=styled.div`
 margin-bottom:50px;
`

class DesktopViewForm extends React.Component {
  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <Wrapper>
          <CreateAccount/>
        </Wrapper>
        <Wrapper>
          <Address/>
        </Wrapper>
        <Payment/>
        {/*<Address/>
        <Payment/>
        <button type='submit' disabled={submitting} >{submitting ? 'Loading...' : 'buy now'}</button>*/}
      </form>
    );
  }
}

export default reduxForm({
  form: 'DesktopView',
  validate
})(DesktopViewForm)
