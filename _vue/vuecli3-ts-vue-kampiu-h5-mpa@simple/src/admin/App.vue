<template>
  <keep-alive>
    <router-view :key="$route.fullPath"/>
  </keep-alive>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator';
  import {
    State,
    Getter,
    Action,
    Mutation,
    namespace
  } from 'vuex-class';

  const commonModule = namespace('common')

  @Component({
    components: {

    },
  })
  export default class App extends Vue {
      private name: string = 'App';

    @commonModule.Mutation('INIT_ROUTER') INIT_ROUTER: any;

    mounted () {
      this.greet()
    }

    greet(): void{

    }

    @Watch('$route.name')
    onRouterChangeAction(val: string, oldVal: string) {
      this.INIT_ROUTER(val)
    }

  }
</script>
<style lang="less">

</style>
