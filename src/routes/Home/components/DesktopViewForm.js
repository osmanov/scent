import React from 'react'
import { reduxForm } from 'redux-form'
import {validate} from 'utils'
import styled from 'styled-components'
import CreateAccount from 'components/CreateAccount'
import Address from 'components/Address'
import Payment from 'components/Payment'
import Button from 'components/Button'

const Wrapper=styled.div`
 margin-bottom:50px;
`

const ButtonWrapper=styled.div`
 margin-top:20px;
 display:flex;
 justify-content: flex-end;
 align-items:  center; 
 &>a{
  font-size: 1.125rem;
  margin-right:40px;
 }
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
        <ButtonWrapper>
          <a href="#">Link</a>
          <Button text="buy now"/>
        </ButtonWrapper>
      </form>
    );
  }
}

export default reduxForm({
  form: 'DesktopView',
  validate
})(DesktopViewForm)
