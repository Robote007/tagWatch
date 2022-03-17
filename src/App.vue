<template>
  <div>
    <NavBar />
  </div>
  <router-view/>
</template>


<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: grey;
}

nav a.router-link-exact-active {
  color: whitesmoke;
}

* {
  margin: 0px !important;
}
</style>
