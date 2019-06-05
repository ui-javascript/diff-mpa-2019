<template>
  <div>
    <h1>name:{{name}}</h1>
    <br>
    <h1>remark:{{remark}}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
class COption {
  name: string
  show: string
  data: any
  defaultTitle: string = '121'
}

@Component({
  props: {
    c_option: COption
  }
})
export default class SampleInfo extends Vue {
  @Prop()
  name: string
  @Prop({ default: 'remark!' })
  remark: string

  // @Watch("name")
  // changeName(oldVal: string, newVal: string) {
  //   this.name = newVal;
  //   console.log(oldVal);
  // }
  // @Watch("remark")
  // changeRemark(oldVal: string, newVal: string) {
  //   this.remark = newVal;
  //   console.log(oldVal);
  // }
}
</script>

<style>

</style>
