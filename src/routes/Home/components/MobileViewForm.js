import React from 'react'
import { reduxForm } from 'redux-form'
import {validate} from 'utils'
import styled from 'styled-components'
import GenderType from 'components/GenderType'
import Address from 'components/Address'
import Payment from 'components/Payment'
import Button from 'components/Button'

const Wrapper=styled.div`
 margin-bottom:40px;
`

class MobileViewForm extends React.Component {
  static propTypes = {
    handleSubmit: React.PropTypes.func.isRequired,
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <Wrapper>
          <Address isMobile/>
        </Wrapper>
        <Wrapper>
          <Payment isMobile/>
        </Wrapper>
        <Button text="buy now"/>

      </form>
    );
  }
}

export default reduxForm({
  form: 'MobileViewForm',
  validate
})(MobileViewForm)
