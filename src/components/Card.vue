<template>
    <div class="card-item" v-for="(watch, index) in montres" :key="index">
        <div class="title">
            <p> {{ watch.modele }}</p>
        </div>
        <br>
        <div class="watch-img">
            <img class="watch" v-bind:src="getImgUrl(watch.img)" alt="">
        </div>
           <div class="description">
            <p> {{ watch.description }}</p>
        </div>
        <br>
        <div class="price">
            <p> {{ watch.price }} €</p>
            <i class="fas fa-shopping-cart" @click="addToCart(watch)"></i>
        </div>
    </div>
</template>

<script>
 
export default {
  name: 'Card',
  data(){
      return {
      }
    },
    props: {
        montres : []
    },
    methods: {
        getImgUrl(pic) {
            return require('../assets/'+pic)
        },
        addToCart(watch){
            this.$store.commit('addWatchInCart', watch)
        }
    }
}
</script>

<style scoped>
   
    .card-item{
        margin: 10px auto !important;
        border: 1px solid grey;
        max-height: 300px;
        min-width: 20%;
        width: 225px;
        padding: 10px;
        border-radius: 8px;
        background-color: black;
    }
    .title{
        font-weight: bold;
        padding-top: 5px;
    }
    .watch{
        height: 150px;
        width: 200px;
        margin: 10px auto !important;
        border-radius: 3px;
    }
    .title, .price {
        color: whitesmoke;
    }
    .description{
        color:#cdc0c0;
        font-weight: 500;
    }
    .price{
        padding-top: 1%;
        display: flex;
        justify-content: space-evenly;
    }
</style>
