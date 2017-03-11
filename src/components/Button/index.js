import React from 'react'
import styled from 'styled-components'
import { IndexLink, Link } from 'react-router'
import { media } from 'styles/utils'
import {color} from 'styles/constants'

const Wrapper=styled.div`
  ${media.mobile`
    width:100%;
  `}
  
`

const CurrentButton=styled.button`
    display: inline-block;
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    outline: none;
    padding:15px 60px;
    ${media.mobile`
     width:100%;
    `}
    &:active{ 
     transform:scale(0.98)
    }
    font-size: 1.125rem;
    color:${color.white};
    background: ${color.wildStrawberry};
`

export const Button = (props) => (
  <Wrapper>
    <CurrentButton type='submit'>{props.text}</CurrentButton>
  </Wrapper>
)

export default Button
