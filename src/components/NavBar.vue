<template>
    <div class="header">
        <div class="bloc-left">
            <div>
                <img alt="Vue logo" src="../assets/logo.png">
            </div>
            <nav>
                <router-link selected to="/">Home</router-link>   <span> | </span>
                <router-link to="/montres">Montres</router-link>   <span> | </span> 
                <router-link to="/univers">Univers</router-link>
            </nav>
        </div>
        <div class="bloc-right">
            <i class="fas fa-user fa-xl"></i>
            <i class="fas fa-search fa-xl"></i>
            <i class="fas fa-shopping-cart fa-xl"></i>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NavBar',
  data(){
      return {
          title: ""
      }
  },
  props: {
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
