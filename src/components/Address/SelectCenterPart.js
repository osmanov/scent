import React from 'react'
import styled from 'styled-components'
import Select from 'components/FormFields/Select'
import { media } from 'styles/utils'

const SelectCenterPart=styled(Select)`
  margin:0 20px;
  ${media.mobile`
     margin:0;
  `}
`

export default SelectCenterPart
