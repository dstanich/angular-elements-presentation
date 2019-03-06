import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Item } from '../data.service';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.scss']
})
export class GroceryListComponent {
  @Input() items: Array<Item> | string;
  @Output() itemClicked: EventEmitter<string> = new EventEmitter();

  itemObjects: Array<Item>;

  constructor() {}

  ngOnInit() {
    this.itemObjects = this.parseItems(this.items);
  }

  ngOnChanges() {
    this.itemObjects = this.parseItems(this.items);
  }

  handleItemClicked(item: Item) {
    this.itemClicked.emit(item.name);
  }

  private parseItems(items: Array<Item> | string): Array<Item> {
    return Array.isArray(items) ? items : JSON.parse(items);
  }
}
