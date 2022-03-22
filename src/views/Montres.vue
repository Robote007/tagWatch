<template>
  <div class="about">
    <h1>Notre collection de montres</h1>
    <div class="main-bloc">
        <div class="card-container" >
            <Card :montres="filteredWatchs"/>
        </div>
        <div class="bloc-panier" v-if="watchsCart.length > 0 ">
            <div class="panier">
                <p class="title">Panier</p>
                <div class="order-item-bloc" v-for="( item, id) in watchsCart" :key="id">
                    <div class="item-bloc">
                        <div>
                            <img class="watch" v-bind:src="getImgUrl(item.img)" alt="">
                        </div>
                        <div>
                            <p class="modele">{{ item.modele }}</p>
                            <div class="bottom-panier">
                                <p class="quantity">Quantité {{ item.quantity }}</p>
                                <div class="addLessButton">
                                    <i @click="cartPlusOne(item)" class="fa-solid fa-circle-plus"></i>
                                    <i @click="cartLessOne(item)" class="fa-solid fa-circle-minus"></i>
                                </div>
                            </div>
                        </div>
                        <div class="price">
                            <div>
                                {{ item.price }} €
                            </div>
                        </div>
                        <div>
                            <i @click="deleteCard(item)" class="fa-solid fa-ban"></i>
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
        cartPlusOne(item){
            item.quantity = item.quantity + 1; 
            this.$store.commit('addAmountInTotal', item.price);
        },
        cartLessOne(item){
            if(item.quantity > 0){
                item.quantity = item.quantity - 1; 
                this.$store.commit('removeAmountFromTotal', item);
            }
            else {
                this.$store.commit('removeItemFromCart', item.id);
            }
        },
        deleteCard(item){
            this.$store.commit('removeItemFromCart', item.id);
            this.$store.commit('deleteCart', item);
        }
    },
}
</script>

<style scoped>
    h1{
        padding-top: 8%; 
        padding-bottom: 1%;
    }
    .main-bloc {
        display: flex !important;
        flex-direction: row !important;
        flex-wrap: wrap;
    }
    .item-bloc{
        display: flex; 
        height: 100px;
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
    .quantity{
        padding-left: 5% !important;
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
        margin-top: 15% !important;
        transform: translateY(-50%) !important;
    }
    .total{
        padding: 10px;
        font-size: 1.5em;
    }
    .addLessButton{
        display: flex; 
        padding-left: 10%;
        justify-content: space-between;
    }
    .fa-ban{
        font-size: 20px; 
        color: red;
    }
    .fa-circle-minus{
        margin-left: 15% !important;
    }
    .bottom-panier{
        display: flex; 
        justify-content: space-around;
    }

    /* Media queries */
    @media (max-width: 680px) {
       h1 {
           padding-top: 15% !important;
       }
    }
</style>