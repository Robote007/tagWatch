<template>
    <div class="header">
        <div class="bloc-left">
            <div>
                  <router-link class="nav-link" selected to="/"><img class="logo" alt="Vue logo" src="../assets/logo.png"></router-link>
            </div>
           
            <nav class="navigation">
                <router-link class="nav-link" selected to="/">Home</router-link>   <span> | </span>
                <router-link class="nav-link" to="/montres">Montres</router-link>   <span> | </span>
                <router-link class="nav-link" to="/univers">Univers</router-link>
            </nav>
            <div class="open-menu"><i class="fa fa-bars" @click="openModal"></i></div>
            <nav class="responsive-navigation" v-if="openMenu">
                <ul class="main-menu">
                    <li><router-link class="nav-link" selected to="/">Home</router-link></li>
                    <li><router-link class="nav-link" selected to="/Montres">Montres</router-link></li>
                    <li><router-link class="nav-link" selected to="/Univers">Univers</router-link></li>
                    <div class="closeMenu" @click="closeModal"><i class="fa fa-times"></i></div>
                </ul>
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
            <i class="fas fa-user fa-xl" @click="triggerSnackBar()"></i>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'

export default {
    name: 'NavBar',
    data(){
        return {
            title : "",
            openSearch: false,
            searchValue : "",
            openMenu : false
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
        },
        openModal(){
            this.openMenu = !this.openMenu;
            this.openSearch = false;
        },
        closeModal(){
            this.openMenu = false;
        },
        triggerSnackBar(){
            this.$store.commit('displaySnackBAr', true);
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
    .open-menu{
        display: none;
    }
    .responsive-navigation{
        display: none;
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
        transform: translateY(50%);     
        height: 50px;
    }
    .fa-xl {
        font-size: 1.2em;
    }

    /* Media queries */
    @media (max-width: 760px) {
        .header {
            padding-bottom: 4% !important;
            margin-top: -1% !important;
        }
        .open-menu{
            display: block;
        }
        .responsive-navigation{
            display: flex;
            padding-top: 18% !important;
            margin-left: 13% !important;
        }
        .main-menu{
            display: block;
        }
        .open-menu{
            margin-top: -2% !important;
            position: fixed;
            margin-left: 20% !important;
        }
        .closeMenu {
            position: fixed;
            margin-top: -35% !important;
            margin-left: 45% !important;
        }
        i.fa.fa-bars {
            font-size: 24px;
            margin-top: 60% !important;
        }
        i.fa.fa-times {
            font-size: 24px;
        }
        ul.main-menu {
            margin-top: 40% !important;
        }
        .search-input{
            margin-right: -10% !important;
            height: 20px !important;
            width: 120px;
        }
        .fa-xl {
            font-size: 1.1em;
        }
        .logo{
            height: 38px !important;
        }
        .navigation {
            display: none;
        }
        .nav-link{
            height: 20px;
            width: 20px;
        }
        i{
            padding-right: 20px;
        }
    }
</style>
