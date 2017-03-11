import React from 'react'
import styled from 'styled-components'
import { Field } from 'redux-form'
import Input from 'components/FormFields/Input'

import { media } from 'styles/utils'


const Wrapper=styled.div`
  background:pink;
  ${media.mobile`
    width:100%;
  `}
`

export const CreateAccount = () => (
  <Wrapper>
    CREATE ACCOUNT
    <div>
      <Field
        name='email'
        component={Input}
        placeholder='Email address' />
      <Field
        name='password'
        type='password'
        component={Input}
        placeholder='Password' />
    </div>
  </Wrapper>
)

export default CreateAccount
