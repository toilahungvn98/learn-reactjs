import React, { Component } from 'react';

class InputBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
   const { onSubmitFromParent } = this.props;
   onSubmitFromParent();
 
  }
  handleChange(e) {
    const { onChangeFromParent } = this.props;
    onChangeFromParent(e.target.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <input type="text" value={this.props.value} onChange={this.handleChange} />
      <button>ADD</button>
     </form>
    );
  }
}

export default InputBar;
