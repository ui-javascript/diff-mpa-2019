<template>
	<div>
		<app-header/>
		<app-main/>
		<slot></slot>
		<app-footer/>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop, Inject } from "vue-property-decorator";
import { AppHeader, AppMain, AppFooter } from "./components";

@Component({
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
})
export default class Layout extends Vue {
  @Prop() private title!: string;
  //   @Inject("title") __title!: string;
  @Provide("title")
  get _title() {
    return this.title || "MoFunc";
  }
}
</script>
