import React, { Component } from 'react';
import './Grocery-List.css';
import { Item } from '../data.service';

interface Props {
  items: Array<Item>;
  itemClicked: Function;
}

interface State {
  items: Array<Item>;
}

export class GroceryList extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { items: props.items };
  }

  render() {
    return (
      <div className="GroceryList">
        {this.state.items.length > 0 ? (
          <div className="main-container">
            <h1>Groceries</h1>

            {this.state.items.map((item: Item, index: number) => {
              return (
                <button
                  key={item.name}
                  className={`grocery-item ${
                    item.removed ? 'grocery-item--removed' : ''
                  }`}
                  onClick={() => this.handleItemClicked(item)}
                >
                  <span className="grocery-item-count">{index + 1}.</span>
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }

  handleItemClicked = (item: Item) => {
    this.props.itemClicked(item.name);
  };
}
