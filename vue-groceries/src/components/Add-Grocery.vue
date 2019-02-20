<template>
  <div class="add-grocery">
    <input
      type="text"
      placeholder="Grocery"
      aria-label="Add a grocery item"
      v-model="item"
      @keydown.enter="addItem"
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AddGrocery extends Vue {
  private item: string = '';

  private addItem() {
    this.$emit('grocery-added', this.item);
    this.item = '';
  }
}
</script>

<style scoped lang="scss">
.add-grocery {
  display: flex;
  justify-content: center;
}

input {
  display: flex;
  flex: 0 0 75%;
  font-size: 1.5rem;
  padding: 10px 15px;
  border: 1px solid #420846;

  &::placeholder {
    color: lightgray;
  }
}
</style>
