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

  componentDidMount() {
    // Inject the Angular Elements output
    // Putting this in index.html is causing "Operation Not Supported" error periodically
    const script = document.createElement('script');
    script.setAttribute('src', './elements.js');
    document.body.appendChild(script);

    let element = document.getElementById('addGrocery');
    if (element) {
      element.addEventListener('groceryAdded', (item: any) =>
        this.groceryAdded(item.detail)
      );
    }

    element = document.getElementById('groceryList');
    if (element) {
      element.addEventListener('itemClicked', (item: any) =>
        this.groceryItemClicked(item.detail)
      );
    }
  }

  render() {
    return (
      <div className="App">
        {/* <Title text="React Groceries" /> */}
        <custom-title text="React Groceries - Custom Elements" />
        <div className="scrollable-area">
          <div className="add-grocery">
            <custom-add-grocery id="addGrocery" />
            {/* <AddGrocery addItem={this.groceryAdded} /> */}
          </div>

          <div className="grocery-list">
            <custom-grocery-list
              id="groceryList"
              items={JSON.stringify(this.state.items)}
            />
            {/* <GroceryList 
              items={this.state.items}
              itemClicked={this.groceryItemClicked}
            /> */}
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
