import React from 'react';
import styled from 'styled-components'

const Wrapper=styled.div`
  width:100%;
  &>input{
    width:inherit;
  }
  
`

class Input extends React.Component {
  render() {

    const {input, meta: {visited, touched, error}, type, placeholder, ...other}=this.props
    const errorMsg = (visited || touched) && error

    return (
      <Wrapper {...other}>
        <input
          {...input}
          autoComplete='off'
          type={type}
          placeholder={placeholder}
          />
        {errorMsg && <span>{errorMsg}</span>}
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
