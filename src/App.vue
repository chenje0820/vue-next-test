<template>
  <div id="nav">
    <router-link to="/">Vuex</router-link> |
    <router-link to="/route">Router</router-link> |
    <router-link to="/test">Test</router-link> |
    <router-link to="/other">Other</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
