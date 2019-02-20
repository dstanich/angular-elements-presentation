import React, { Component } from 'react';
import './App.css';
import { Title } from './title/Title';
import { AddGrocery } from './add-grocery/Add-Grocery';
import { DataService, Item } from './data.service';
import { GroceryList } from './grocery-list/Grocery-List';

interface State {
  items: Array<Item>;
}

class App extends Component<{}, State> {
  private dataService: DataService;

  constructor(props: any) {
    super(props);
    this.dataService = new DataService();
    this.state = { items: this.dataService.items };
  }

  render() {
    return (
      <div className="App">
        <Title text="React Groceries" />
        <div className="scrollable-area">
          <div className="add-grocery">
            <AddGrocery addItem={this.groceryAdded} />
          </div>
          <div className="grocery-list">
            <GroceryList
              items={this.state.items}
              itemClicked={this.groceryItemClicked}
            />
          </div>
        </div>
      </div>
    );
  }

  groceryAdded = (item: string) => {
    this.dataService.addItem(item);
    this.setState({ items: this.dataService.items });
  };

  groceryItemClicked = (item: string) => {
    this.dataService.toggleItemStatus(item);
    this.setState({ items: this.dataService.items });
  };
}

export default App;
