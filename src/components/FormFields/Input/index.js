import React from 'react';

class Input extends React.Component {
  render() {
    
    const {input, meta: {visited, touched, error}, type, placeholder, ...other}=this.props
    const errorMsg = (visited || touched) && error

    return (
      <div>
        <input
          {...input}
          autoComplete='off'
          type={type}
          placeholder={placeholder}
          />
        {errorMsg && <span>{errorMsg}</span>}
      </div>
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
