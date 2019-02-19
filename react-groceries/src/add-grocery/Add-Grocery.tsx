import React, { Component } from 'react';
import './Add-Grocery.css';

interface Props {
  addItem: Function;
}

class AddGrocery extends Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="AddGrocery">
        <input
          type="text"
          placeholder="Grocery"
          aria-label="Add a grocery item"
          onKeyDown={this.addItem}
        />
      </div>
    );
  }

  addItem = (event: any) => {
    if (event.key === 'Enter') {
      this.props.addItem(event.target.value);
    }
  };
}

export { AddGrocery };
