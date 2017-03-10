import React from 'react'
import styled from 'styled-components'
import { IndexLink, Link } from 'react-router'
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
  </Wrapper>
)

export default CreateAccount
