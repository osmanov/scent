import React from 'react';
import styled from 'styled-components'
import {color} from 'styles/constants'
import ErrorSection from '../ErrorSection'



const Wrapper=styled.div`
  width:100%;
`

const CurrentSelect=styled.select`
    color:${color.dustyGray};
    width:inherit;
    padding: 15px 35px 15px 15px ;
    background: ${color.alabaster};
    font-size: 1.125rem;
    border-style: solid;
    border-color: ${(props) => {
     const result = props.isError ? color.red : color.mercury
     return `${result};`
    }}
    border-width: 1px;
    outline: none;
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

class Select extends React.Component {
  static propTypes = {
    input: React.PropTypes.shape({
      value: React.PropTypes.string.isRequired,
      onChange: React.PropTypes.func.isRequired
    }),
    meta: React.PropTypes.shape({
      touched: React.PropTypes.bool,
      error: React.PropTypes.string,
      warning: React.PropTypes.string
    }),
    children: React.PropTypes.any,
    onChange:React.PropTypes.func,
  }

  _onChange = (e)=> {
    this.props.input.onChange(e)
    this.props.onChange && this.props.onChange(e)
  }

  render() {
    const { children, input,meta: {visited, touched, error},...other} = this.props
    const errorMsg = (visited ||touched) && error
    return (
      <Wrapper {...other}>
        <CurrentSelect {...input} isError={!!errorMsg} onChange={this._onChange}>
          {children}
        </CurrentSelect>
        {errorMsg && <ErrorSection>
        <span>{errorMsg}</span>
      </ErrorSection>}

      </Wrapper>
    );
  }
}

export default Select
