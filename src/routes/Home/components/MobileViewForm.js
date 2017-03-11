import React from 'react'
import { reduxForm } from 'redux-form'
import {validate} from 'utils'

import GenderType from 'components/GenderType'
import Address from 'components/Address'
import Payment from 'components/Payment'



class MobileViewForm extends React.Component {
  static propTypes = {
    handleSubmit: React.PropTypes.func.isRequired,
  }

  render() {
    const { handleSubmit, submitting } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <Address isMobile/>
        <button type='submit' disabled={submitting} >{submitting ? 'Loading...' : 'buy now'}</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'MobileViewForm',
  validate
})(MobileViewForm)
