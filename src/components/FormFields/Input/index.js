import React from 'react';
import styled from 'styled-components'
import ErrorSection from '../ErrorSection'
import {color} from 'styles/constants'

const Wrapper=styled.div`
  width:100%;
  &>input{
    width:inherit;
  }
  position:relative;
`

const CurrentInput=styled.input`
    background: ${color.alabaster};
    padding: 15px;
    line-height: 100%;
    font-size: 1.125rem;
    border-style: solid;
    border-color: ${(props) => {
      const result = props.isError ? color.red : color.mercury
      return `${result};`
    }}
    border-width: 1px;
    outline: none;
    text-overflow: ellipsis;
    &:focus {
			border-color: ${(props) => {
        const result = props.isError ? color.red : color.wildStrawberry
        return `${result};`
      }}
			background: ${color.white};
			&::-webkit-input-placeholder{
			  opacity:0;
		  }
		}
`




class Input extends React.Component {
  render() {

    const {input, meta: {touched, error}, type, placeholder, ...other}=this.props
    const errorMsg = touched && error

    return (
      <Wrapper {...other}>
        <CurrentInput
          isError={!!errorMsg}
          {...input}
          autoComplete='off'
          type={type}
          placeholder={placeholder}
          />
        {errorMsg && <ErrorSection>
          <span>{errorMsg}</span>
        </ErrorSection>}
      </Wrapper>
    );
  }
}

Input.propTypes = {
  type: React.PropTypes.oneOf(['text', 'password'])
};
Input.defaultProps = {
  type:'text'
};

export default Input
