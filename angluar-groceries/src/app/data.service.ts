import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  get items(): Array<Item> {
    return this._items;
  }

  private _items: Array<Item> = [];

  constructor() {}

  addItem(name: string) {
    this._items.push({
      name,
      removed: false
    });
  }

  removeItem(name: string) {
    const foundItem = this._items.filter((item: Item) => item.name === name);
    if (foundItem.length > 0) {
      foundItem[0].removed = true;
    }
  }

  clearItems() {
    this._items = [];
  }
}

export interface Item {
  name: string;
  removed: boolean;
}
