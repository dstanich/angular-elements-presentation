<template>
  <div id="app">
    <!-- <Title text="Vue Groceries"/> -->
    <custom-title text="Vue Groceries - Custom Elements"></custom-title>
    <div class="scrollable-area">
      <div class="add-grocery">
        <!-- <Add-Grocery @grocery-added="groceryAdded"/> -->
        <custom-add-grocery id="addGroceryElem"></custom-add-grocery>
      </div>
      <div class="grocery-list">
        <!-- <Grocery-List :items="groceryItems" @item-clicked="groceryItemClicked"/> -->
        <custom-grocery-list id="groceryList" :items="stringifiedItems"></custom-grocery-list>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Title from './components/Title.vue';
import AddGrocery from './components/Add-Grocery.vue';
import GroceryList from './components/Grocery-List.vue';

import { DataService, Item } from './data.service';

@Component({
  components: {
    Title,
    AddGrocery,
    GroceryList
  }
})
export default class App extends Vue {
  public get groceryItems(): Array<Item> {
    return this.dataService.items;
  }

  public get stringifiedItems(): string {
    return JSON.stringify(this.groceryItems);
  }

  private dataService = new DataService();

  public mounted() {
    let element = document.getElementById('addGroceryElem');
    if (element) {
      element.addEventListener('groceryAdded', (event: any) =>
        this.groceryAdded(event.detail)
      );
    }

    element = document.getElementById('groceryList');
    if (element) {
      element.addEventListener('itemClicked', (event: any) =>
        this.groceryItemClicked(event.detail)
      );
    }
  }

  public groceryAdded(item: string) {
    this.dataService.addItem(item);
  }

  public groceryItemClicked(item: string) {
    this.dataService.toggleItemStatus(item);
  }
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  overflow: hidden;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #b0dfbc;
  overflow: hidden;
}

.scrollable-area {
  display: block;
  flex: 1 1 auto;
  overflow: auto;

  .add-grocery {
    margin-top: 2rem;
  }

  .grocery-list {
    margin-top: 2rem;
  }
}
</style>
