import React, { Component } from 'react';


class ListItem extends Component {
  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove() {
    const { name,onRemoveFromParent } = this.props;
    onRemoveFromParent(name);
    
  }
  render() {
     const { name ,date } = this.props;

    return (
      <li >{ name } - { date } <span className="remove" onClick={ this.handleRemove}>remove</span></li>
    );
  }
}

export default ListItem;