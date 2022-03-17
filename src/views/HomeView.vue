<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Tag Heuer</h1>
    <!-- <div class="watch-color"></div>
    <div class="bloc-image">
        <img class="image-montre-coloré" src="../assets/images1.jpeg" alt="montrre blanche">
        <img class="image-montre-coloré" src="../assets/images2.jpeg" alt="montre-jaune">
        <img class="image-montre-coloré" src="../assets/images3.jpeg" alt="montre-rouge">
    </div> -->
    <div>
        <div class="black-watch">
            <img class="main-watch-img" src="../assets/montre-principal.jpeg" alt="montrer noir sur charbon" />
        </div>
        <button @click="say('hello')">VENEZ DÉCOUVRIR</button>
        <img style="width: 100%" src="../assets/color-montre.jpeg" alt="lot de montre coloré" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  }
}
</script>

<style scoped>
  .home{
    height: 100vh;
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .main-watch-img{
      width: 100%;
      z-index: 1;
  }
  .watch-color{
    margin-top: 53% !important;
    height: 80vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  h1 {
    color: white;
    font-size: 2.8em;
    padding-top: 1%;
    font-family: Playfair;
  }
  .black-watch {
      background-color: black;
  }
  .bloc-image {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 50px auto !important;
  }
  .image-montre-coloré {
      padding: 10px;
  }
</style>
