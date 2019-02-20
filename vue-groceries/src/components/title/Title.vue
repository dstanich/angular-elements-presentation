<template>
  <div class="title">
    <span class="text">{{ text }}</span>
    <a
      class="github"
      aria-label="GitHub"
      href="https://github.com/dstanich/angular-elements-presentation"
      target="_blank"
    >
      <img src="@/assets/GitHub-Mark-Light-32px.png">
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private text!: string;
}
</script>

<style scoped lang="scss">
.title {
  display: flex;
  align-content: space-between;
  align-items: center;
  background: #6a266f;
  padding: 5px 15px;
  box-shadow: 0 2px 5px 0px #000000;
  color: #cfa8d2;
  margin-bottom: 5px;
}

.text {
  display: flex;
  flex: 1 1 auto;
  color: #cfa8d2;
  font-size: 1.25rem;
}

.github {
  display: flex;
  flex: 0 0 auto;
}
</style>
