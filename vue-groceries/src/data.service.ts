export class DataService {
  get items(): Array<Item> {
    return this.intItems;
  }

  private intItems: Array<Item> = [];

  constructor() {
    /* */
  }

  public addItem(name: string) {
    this.intItems.push({
      name,
      removed: false
    });
  }

  public toggleItemStatus(name: string) {
    const foundItem = this.findItemByName(name);
    if (foundItem) {
      foundItem.removed = !foundItem.removed;
    }
  }

  public clearItems() {
    this.intItems = [];
  }

  private findItemByName(name: string): Item | undefined {
    const search = this.intItems.filter((item: Item) => item.name === name);
    return search.length > 0 ? search[0] : undefined;
  }
}

export interface Item {
  name: string;
  removed: boolean;
}
