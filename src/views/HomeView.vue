<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Tag Heuer</h1>
    <div class="watch-color"></div>
    <div class="bloc-image">
        <img class="image-montre-coloré" src="../assets/images1.jpeg" alt="montrre blanche">
        <img class="image-montre-coloré" src="../assets/images2.jpeg" alt="montre-jaune">
        <img class="image-montre-coloré" src="../assets/images3.jpeg" alt="montre-rouge">
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
    background-image: url("../assets/montre-principal.jpeg");
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .watch-color{
    margin-top: 53% !important;
    height: 80vh;
    background-image: url("../assets/color-montre.jpeg");
    /* object-fit: cover; */
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
