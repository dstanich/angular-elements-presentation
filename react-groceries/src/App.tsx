import React, { Component } from 'react';
import './App.css';
import { Title } from './title/Title';
import { AddGrocery } from './add-grocery/Add-Grocery';
import { DataService } from './data.service';

class App extends Component {
  private dataService: DataService;

  constructor(props: any) {
    super(props);
    this.dataService = new DataService();
  }

  render() {
    return (
      <div className="App">
        <Title text="React Groceries" />
        <div className="scrollable-area">
          <div className="add-grocery">
            <AddGrocery addItem={this.groceryAdded} />
          </div>
        </div>
      </div>
    );
  }

  groceryAdded = (item: string) => {
    this.dataService.addItem(item);
    console.warn(this.dataService.items);
  };
}

export default App;
