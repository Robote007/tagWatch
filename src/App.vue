<template>
    <div>
        <div v-if="showSnack">
            <SnackBar />
        </div>
        <NavBar />
    </div>
    <router-view/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SnackBar from './components/SnackBar.vue'
import Vuex from 'vuex'

export default {
    name: 'App',
    components: {
        NavBar,
        SnackBar
    },
    computed: {
        ...Vuex.mapGetters([
            'showSnack'
        ]),
    }
}
</script>

<style>
#app {
    font-family: 'ProximaNova', sans-serif;
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
