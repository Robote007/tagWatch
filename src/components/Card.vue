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
            <i class="fas fa-shopping-cart"></i>
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
        }
    }
}
</script>

<style scoped>
   
    .card-item{
        margin: 10px auto !important;
        border: 1px solid grey;
        height: 300px;
        min-width: 20%;
        padding: 10px;
        border-radius: 3px;
        background-color: black;
    }
    .title{
        font-weight: bold;
        padding-top: 5px;
    }
    .watch{
        height: 170px;
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
