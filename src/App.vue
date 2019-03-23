<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
@import "./assets/css/common.scss";
#app {
  width: 100%;
  height:100%;
  text-align: center;
  color: #553f2a;
  background: #72d2eb;
  padding: 20px;
}
</style>
