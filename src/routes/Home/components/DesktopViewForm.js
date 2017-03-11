import React from 'react'
import { reduxForm } from 'redux-form'
import {validate} from 'utils'

import CreateAccount from 'components/CreateAccount'
import Address from 'components/Address'
import Payment from 'components/Payment'



class DesktopViewForm extends React.Component {
  render() {
    const { handleSubmit, submitting } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <CreateAccount/>
        <Address/>
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
