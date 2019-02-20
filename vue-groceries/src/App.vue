<template>
  <div id="app">
    <Title text="Vue Groceries"/>
    <div class="scrollable-area">
      <div class="add-grocery">
        <Add-Grocery v-on:grocery-added="groceryAdded"/>
      </div>
      <!-- <app-grocery-list
    [items]="groceryItems"
    (itemClicked)="groceryItemClicked($event)"
      ></app-grocery-list>-->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Title from './components/Title.vue';
import AddGrocery from './components/Add-Grocery.vue';
import { DataService } from './data.service';

@Component({
  components: {
    Title,
    AddGrocery
  }
})
export default class App extends Vue {
  private dataService = new DataService();

  public groceryAdded(item: string) {
    this.dataService.addItem(item);
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
  background: #cfa8d2;
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
