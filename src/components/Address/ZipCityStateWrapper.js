import React from 'react'
import styled from 'styled-components'
import { media } from 'styles/utils'

const ZipCityStateWrapper=styled.div`
  display:flex;
  justify-content:space-between;
  ${media.mobile`
    flex-direction:column;
     margin:0;
  `}
`
export default ZipCityStateWrapper


