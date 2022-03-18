<template>
    <div class="card-item" v-for="(watch, index) in montres" :key="index">
        {{ watch.id }}
        <p> {{ watch.description }}</p>
        <p> {{ watch.price }}</p>
        <p> {{ watch.modele }}</p>
        <br>
        <hr>
        <!-- <img v-bind:src="watch.img" alt="test" /> -->
    </div>

</template>

<script>
 
export default {
  name: 'Card',
  data(){
      return {
          title: ""
      }
  },
  props: {
      montres : []
  }
}
</script>

<style scoped>
   
    .card-item{
        margin: 10px auto !important;
        border: 1px solid grey;
        height: 300px;
        width: 20%;
        padding: 10px;
    }
</style>
