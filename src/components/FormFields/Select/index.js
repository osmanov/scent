import React from 'react';

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
    const { children, input, meta: {visited, touched, error}} = this.props
    const errorMsg = (visited || touched) && error
    return (
      <div>
        <select {...input} onChange={this._onChange}>
          {children}
        </select>
        {errorMsg && <span>{errorMsg}</span>}
      </div>
    );
  }
}

export default Select
