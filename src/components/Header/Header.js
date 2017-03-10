import React from 'react'
import styled from 'styled-components'
import { IndexLink, Link } from 'react-router'

import { media } from 'styles/utils'
import Img from 'components/Img'


const Wrapper=styled.header`
  margin:20px 0;
  display: flex;
  justify-content: flex-start;
  ${media.phone`
    justify-content: center;
  `}
`

export const Header = () => (
  <Wrapper>
    <a title='Home page' href="https://www.scentbird.com">
      <Img src='https://www.scentbird.com/assets/logo/scentbird_logo_black_2.png' alt="scentbird" />
    </a>
  </Wrapper>
)

export default Header
