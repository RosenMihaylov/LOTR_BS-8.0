<template>
  <div id="app">
    <v-app>
      <Header></Header>
      <router-view />
    </v-app>
  </div>
</template>

<script>
import Header from "./views/Header";
export default {
  components: { Header }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: calc(100vh - 100px);
  #nav {
    line-height: 100px;
    background: #c7762242;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  .component {
    height: calc(100% - 100px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
