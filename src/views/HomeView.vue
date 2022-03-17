<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Tag Heuer</h1>
    <div>
        <div class="black-watch-block">
            <img class="main-watch-img" src="../assets/montre-principal.jpeg" alt="montrer noir sur charbon" />
            <button class="myButton" variant="outline-primary" @click="say('hello')">VENEZ DÉCOUVRIR</button>
        </div>
    <div class="watch-block">
        <div class="watch-man" @click="goManModels()">
        </div>
        <div class="watch-woman" @click="goWomanModels()">
        </div>
    </div>
        <h2>NOS MODELES COLORES</h2>
        <img style="width: 100%" src="../assets/color-montre.jpeg" alt="lot de montre coloré" />
    </div>
    <!-- <div class="bloc-image">
        <img class="image-montre-coloré" src="../assets/images1.jpeg" alt="montrre blanche">
        <img class="image-montre-coloré" src="../assets/images2.jpeg" alt="montre-jaune">
        <img class="image-montre-coloré" src="../assets/images3.jpeg" alt="montre-rouge">
    </div> -->
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  },
  methods: {
    say(value){
      console.log(value);
    },
     goManModels(){
      console.log("man");
    },
    goWomanModels(){
      console.log("woman");
    }
  }
}
</script>

<style scoped>
    h2{
        font-size: 3em;
        background-color: black;
        color: white; 
        font-family: Playfair;
    }
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
      margin-bottom: -2.8% !important;
  }
  .watch-color{
    margin-top: 53% !important;
    height: 80vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .watch-block {
      display: flex;
      flex-wrap: wrap;
      background-color: black;
  }
  .watch-man {
      width: 50%;
      height: 700px;
      background-image: url('../assets/watch-man.png');
      background-repeat: no-repeat;
      object-fit: cover;
      background-size: cover;
      background-position: center;

  }
   .watch-woman {
      width: 50%;
      height: 700px;
      background-image: url('../assets/watch-woman.png');
      background-repeat: no-repeat;
      object-fit: cover;
      background-size: cover;
      background-position: center;

  }
  .watch-man:hover, .watch-woman:hover {
      opacity: 0.6;
  }
  h1 {
    color: white;
    font-size: 2.8em;
    padding-top: 1%;
    font-family: Playfair;
  }
  .black-watch-block {
      background-color: black;
      position: relative;
  }
  .bloc-image {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 50px auto !important;
      justify-content: space-around;
  }
  .image-montre-coloré {
      padding: 10px;
  }

  .myButton {
    /* position: absolute; */
    margin-top: -30% !important;
    margin-left: auto !important; 
    /* transform: translateX(-50%); */
    z-index: 5;
    box-shadow: 3px 3px 0px 0px white;
    background:black !important;
    background-color:white;
    border:1px solid white;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:17px;
    font-weight:bold;
    padding: 20px 44px;
    text-decoration:none;
}
.myButton:hover {
	background:linear-gradient(to bottom, #378de5 5%, #79bbff 100%);
	background-color:#378de5;
}
.myButton:active {
	position:relative;
	top:1px;
}

        
</style>
