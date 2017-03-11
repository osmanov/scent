import React from 'react'
import styled from 'styled-components'
import Input from 'components/FormFields/Input'
import { media } from 'styles/utils'

const InputThirdPart=styled(Input)`
  margin-left:20px;
  width:${(730-40)/3}px;
  ${media.mobile`
    width:100%;
     margin-left:0;
  `}
`

export default InputThirdPart
