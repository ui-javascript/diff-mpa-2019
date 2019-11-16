<template>
  <div id="app">
    <router-view :title="title"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Layout extends Vue {
  @Prop() private title!: string;
}
</script>
