import React from 'react'
import styled from 'styled-components'
import { media } from 'styles/utils'


const Wrapper=styled.div`
  background:silver;
`

export const PersonType = () => (
  <Wrapper>
    <input type="checkbox" value="woman" />For woman
    <input type="checkbox" value="men" />For men
  </Wrapper>
)

export default PersonType
