<template>
  <div class="about">
    <h1 style="padding-top: 8%; padding-bottom: 1%">Notre collection de montres</h1>
    <div class="main-bloc">
        <div class="card-container" >
            <Card :montres="filteredWatchs"/>
        </div>
        <!-- <div class="panier" v-if="watchs.length > 0 ">
          Panier
        </div> -->
    </div>


  </div>
</template>


<script>
import Card from '@/components/Card.vue'
import Vuex from 'vuex'

export default {
    name: 'Montres',
    components: {
        Card
    },
    computed: {
        ...Vuex.mapGetters([
            'watchs',
            'searchKey'
        ]),
        filteredWatchs(){
            return this.watchs.filter((item) => {
                return item.description.toLowerCase().includes(this.searchKey.toLowerCase())
        });
        },
    },
    methods: {
    },
}
</script>

<style scoped>
    .main-bloc {
        display: flex !important;
        flex-direction: row !important;
        flex-wrap: wrap;
    }
    .card-container{
        width: 70%;
        margin: 20px auto !important;
        display: flex !important;
        flex-direction: row !important;
        flex-wrap: wrap;
    }
    .panier {
        width: 30%;
    }
</style>