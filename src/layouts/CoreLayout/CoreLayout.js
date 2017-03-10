import React from 'react'
import styled from 'styled-components'
import Header from 'components/Header'


import {deviceSize} from 'styles/constants'
import { media } from 'styles/utils'

const Wrapper=styled.div`
  margin:0 auto;
  max-width: ${deviceSize.desktop}px;
  min-width: ${deviceSize.desktop}px; /*we don't need to create the ipad version*/
  ${media.mobile`
    margin:0 20px;
    min-width: ${deviceSize.mobile-80}px;
  `}
`

export const CoreLayout = ({ children }) => (
  <Wrapper>
    <Header />
    <section>
      {children}
    </section>
  </Wrapper>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired,
}

export default CoreLayout
