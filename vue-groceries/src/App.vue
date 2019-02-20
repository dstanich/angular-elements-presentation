<template>
  <div id="app">
    <Title text="Vue Groceries"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Title from './components/title/Title.vue';

@Component({
  components: {
    Title
  }
})
export default class App extends Vue {}
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
</style>
