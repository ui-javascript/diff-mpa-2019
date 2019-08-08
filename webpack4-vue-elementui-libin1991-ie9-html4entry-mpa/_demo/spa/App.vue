<template>
    <div id="app">
        <router-link to="/home">首页</router-link>
        <router-link to="/other">其他</router-link>
        <router-link to="/xxxx">404</router-link>

        <router-view />
    </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="less">

</style>
