<template>
  <div class="about">
    <h1 style="padding-top: 8%; padding-bottom: 1%">Notre collection de montres</h1>
    <div class="main-bloc">
        <div class="card-container" >
            <Card :montres="filteredWatchs"/>
        </div>
        <div class="bloc-panier" v-if="watchsCart.length > 0 ">
            <div class="panier">
                <p class="title">Panier</p>
                <div class="order-item-bloc" v-for="( item, id) in watchsCart" :key="id">
                    <div style="display: flex; height: 100px">
                        <div>
                            <img class="watch" v-bind:src="getImgUrl(item.img)" alt="">
                        </div>
                        <div style="">
                            <p class="modele">{{ item.modele }}</p>
                            <p class="">Quantité {{ item.quantity }}</p>
                        </div>
                        <div class="price">
                            {{ item.price }} €
                        </div>
                    </div>
                    <hr>
                </div>
            </div>
            <p class="total">Total : {{ totalAmount }} €</p>
        </div>
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
            'searchKey',
            'watchsCart',
            'totalAmount'
        ]),
        filteredWatchs(){
            return this.watchs.filter((item) => {
                return item.description.toLowerCase().includes(this.searchKey.toLowerCase())
            });
        },
    },
    methods: {
        getImgUrl(pic) {
            return require('../assets/'+pic)
        },
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
        max-width: 70%;
        margin: 20px auto !important;
        display: flex !important;
        flex-direction: row !important;
        flex-wrap: wrap;
    }
    .bloc-panier {
        overflow-y: scroll;
        border-radius: 8px;
        min-width: 25%;
        margin: 30px auto !important;
        height: 30%;
        background-color: whitesmoke;
    }
    .title{
        font-size: 2em;
        padding: 10px;
    }
    .order-item-bloc {
        padding: 20px;
    }
    .watch{
        height: 80px;
        width: 80px;
        margin: 10px auto !important;
        border-radius: 50%;
    }
    .modele{
        margin-top: 20% !important;
        padding-left: 5%;
        transform: translateY(-50%) !important;
    }
    .price{
        font-weight: bold;
         margin-top: 20% !important;
        transform: translateY(-50%) !important;

    }
    .total{
        padding: 10px;
        font-size: 1.5em;
    }
</style>