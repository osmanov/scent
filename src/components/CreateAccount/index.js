import React from 'react'

import Input from 'components/FormFields/Input'

import { media } from 'styles/utils'

import { Field } from 'redux-form'
import styled from 'styled-components'

const Wrapper=styled.div`
  display:flex;
  justify-content:space-between;
`

const InputPassword = styled(Input)`
  margin-left:20px;
`

export const CreateAccount = () => (
  <div>
    <h3>Create account</h3>
    <Wrapper>
      <Field
        name='email'
        component={Input}
        placeholder='Email address' />
      <Field
        name='password'
        type='password'
        component={InputPassword}
        placeholder='Password' />
    </Wrapper>
  </div>
)

export default CreateAccount
