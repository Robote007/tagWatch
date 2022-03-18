<template>
    <div class="header">
        <div class="bloc-left">
            <div>
                  <router-link class="nav-link" selected to="/"><img alt="Vue logo" src="../assets/logo.png"></router-link>
            </div>
            <nav>
                <router-link class="nav-link" selected to="/">Home</router-link>   <span> | </span>
                <router-link class="nav-link" to="/montres">Montres</router-link>   <span> | </span>
                <router-link class="nav-link" to="/univers">Univers</router-link>
            </nav>
        </div>
 
        <input 
            class="search-input"
            v-if="openSearch" 
            type="search" 
            v-model="searchValue"
            id="search" 
            @input="search"
            placeholder="Rechercher ..." 
            autocomplete="off"
        >
        <div class="bloc-right">
            <i class="fas fa-search fa-xl" @click="openSearchInput()"></i>
            <i class="fas fa-shopping-cart fa-xl"></i>
            <i class="fas fa-user fa-xl"></i>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'

export default {
    name: 'NavBar',
    data(){
        return {
            title: "",
            openSearch: false,
            searchValue : ""
        }
    },
    props: {
    },
    computed: {
        ...Vuex.mapGetters([
            'searchKey'
        ]),
        search(){
            this.$store.commit('updateSearchKey', this.searchValue);
        }
    },
    methods: {
        openSearchInput(){
            this.openSearch = !this.openSearch;
        }
    }
}
</script>

<style scoped>
    .header {
        z-index: 100;
        width: 100vw !important;
        position: fixed;
        border-bottom: 1px solid #dd7979;
        background-color: black;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: baseline;
        align-content: stretch;
    }
    .search-input{
        padding: 10px;
        margin-right: -40% !important;
    }
    .nav-link{
        font-size: 20px;
        font-family: 'ProximaNova', sans-serif;
    }
    .bloc-left {
        display: flex;
    }
    .bloc-right{
        display: flex;
    }

    ul {
        list-style-type: none;
        display: flex;
        justify-content: space-around;
    }
    li {
        padding-top: 45%;
    }
    i {
        color: white;
        padding-right: 35px;
    }
    img {
        /* margin-top: 50%; */
        transform: translateY(50%);     
        height: 50px;
    }
</style>
