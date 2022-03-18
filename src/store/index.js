import { createStore } from 'vuex'

export default createStore({
  state: {
    montres : [
      {
        id : 1,
        description : "Montre automatique 51mm",
        price : 2550,
        img : "../src/assets/images1.jpeg",
        modele : "Tag Heuer"
      },
      {
        id : 1,
        description : "Montre automatique 29mm",
        price : 2750,
        img : "../assets/images2.jpeg",
        modele : "Tag Heuer CARRERA"
      },
      {
        id : 1,
        description : "Montre automatique 52mm",
        price : 2500,
        img : "assets/images3.jpeg",
        modele : "Tag Heuer CARRERA"
      },
      {
        id : 1,
        description : "Montre automatique 39mm",
        price : 3100,
        img : "./src/assets/images1.jpeg",
        modele : "Tag Heuer CARRERA"
      }
    ]
  },
  getters: {
    watchs(state){
      return state.montres;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
