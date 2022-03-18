import { createStore } from 'vuex'

export default createStore({
  state: {
    montres : [
      {id : 1, description : "Montre automatique 51mm",price : 2550,img : "montres1.jpeg",modele : "Tag Heuer CARRERA"},
      {id : 2, description : "Montre semi-automatique 29mm",price : 2750,img : "montres2.jpeg",modele : "Tag Heuer CARRERA"},
      {id : 3,description : "Montre automatique 52mm",price : 2500,img : "montres3.jpeg",modele : "Tag Heuer CARRERA"},
      {id : 4,description : "Montre automatique 39mm",price : 3100,img : "montres4.jpeg",modele : "Tag Heuer CARRERA"},
      {id : 3,description : "Montre semi-automatique 52mm",price : 2500,img : "montres3.jpeg",modele : "Tag Heuer CARRERA"},
      {id : 1, description : "Montre automatique 51mm",price : 2550,img : "montres1.jpeg",modele : "Tag Heuer CARRERA"},
      {id : 2, description : "Montre automatique 29mm",price : 2750,img : "montres2.jpeg",modele : "Tag Heuer CARRERA"},
      {id : 3,description : "Montre semi-automatique 52mm",price : 2500,img : "montres3.jpeg",modele : "Tag Heuer CARRERA"},
      {id : 4,description : "Montre automatique 39mm",price : 3100,img : "montres4.jpeg",modele : "Tag Heuer CARRERA"},
      {id : 1, description : "Montre automatique 51mm",price : 2550,img : "montres1.jpeg",modele : "Tag Heuer CARRERA"},
      {id : 2, description : "Montre semi-automatique 29mm",price : 2750,img : "montres2.jpeg",modele : "Tag Heuer CARRERA"},
      {id : 4,description : "Montre automatique 39mm",price : 3100,img : "montres4.jpeg",modele : "Tag Heuer CARRERA"},
      {id : 2, description : "Montre automatique 29mm",price : 2750,img : "montres2.jpeg",modele : "Tag Heuer CARRERA"},
      {id : 1, description : "Montre automatique 51mm",price : 2550,img : "montres1.jpeg",modele : "Tag Heuer CARRERA"},
      {id : 4,description : "Montre automatique 39mm",price : 3100,img : "montres4.jpeg",modele : "Tag Heuer CARRERA"},
      {id : 3,description : "Montre automatique 52mm",price : 2500,img : "montres3.jpeg",modele : "Tag Heuer CARRERA"},
    ],
    searchKey : "",
    watchsCart : [],
    totalAmount : 0
  },
  getters: {
    watchs(state){
        return state.montres;
    },
    searchKey(state){
        return state.searchKey;
    },
    watchsCart(state){
        return state.watchsCart;
    },
    totalAmount(state){
        return state.totalAmount;
    }
  },
  mutations: {
    updateSearchKey(state, value) {
        state.searchKey = value;
    },
    addWatchInCart(state, value) {
        state.totalAmount += value.price;
        for(var i = 0; i < state.watchsCart.length; i++){
            if(state.watchsCart[i].id === value.id){
                return state.watchsCart[i].quantity++
            }
        }
        value.quantity = 1;
        state.watchsCart.push(value);
    }
  },
  actions: {
  },
  modules: {
  }
})
