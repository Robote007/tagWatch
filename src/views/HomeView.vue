<template>
  <div class="home">
    <div>
        <div class="black-watch-block">
            <h1 style="">Tag Heuer</h1>
            <img class="main-watch-img" src="../assets/montre-principal.jpeg" alt="montrer noir sur charbon" />
            <h2 style="position: absolute; color: white; margin-left: 70% ">SWISS avant garde since 1860</h2>
        </div>

        <div style="height: 150px;">
            <button class="myButton" variant="outline-primary" @click="goToUnivers()">VENEZ DÉCOUVRIR</button>
        </div>
        <div class="watch-block">
            <div class="watch-man" @click="goManModels()">
            </div>
            <div class="watch-woman" @click="goWomanModels()">
            </div>
        </div>
        <h3 class="fade-in-text">NOS MODÉLES SPORTIFS</h3>
        <img style="width: 100%" src="../assets/color-montre.jpeg" alt="lot de montre coloré" />
    </div>
    
    <div>
        <p class="expertise">NOTRE EXPERTISE</p>
        <img style="width: 100%" src="../assets/exper.png" alt="un horloger en action">
    </div>

    <footer style="padding-top: 10%; padding-bottom: 1%">
        <p class="footer-text" style="text-align: center; font-size: 1.5em">© TAG Heuer une division de LVMH Swiss Manufactures SA - 2022</p>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  },
 
  methods: {
    goToUnivers(){
        this.$router.push('/montres'); 
      console.log('univers');
    },
    goManModels(){
        this.$router.push('/man'); 
      console.log("man");
    },
    goWomanModels(){
        this.$router.push('/woman'); 
      console.log("woman");
    }
  }
}
</script>

<style scoped>
    h1{
        margin-top: 19% !important;
        margin-left: 10% !important;
        position: absolute;
        color: white; 
        font-size: 3.3em;
    }
    h2 {
        margin-top: -6% !important;
        margin-left: 75% !important;
    }
    p{
        text-align: center;
        font-weight: bold; 
        font-size: 3em; 
        margin: 60px auto !important;
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
        font-family: 'proximaNova', sans-serif;
        margin-top: 3.5% !important;
        margin-left: auto !important; 
        z-index: 5;
        box-shadow: 3px 3px 0px 0px black;
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
        word-spacing: 10px;
    }
    .myButton:hover {
        background:linear-gradient(to bottom, #378de5 5%, #79bbff 100%);
        background-color:#378de5;
    }
    .myButton:active {
        position:relative;
        top:1px;
    }

    h3{
        font-size: 3em;
        background-color: black;
        color: white; 
        font-family: Playfair;
        overflow: hidden;
        font-family: 'ProximaNova', sans-serif;
    }

    h3:before {
        content: '';
        position: absolute;
        left: 100%;
        width: 50%;
        height: 10%;
        background: linear-gradient(90deg, transparent 0%, #000 5%, #000 100%);
        animation: animate 10s linear ;
    }

    @keyframes animate {
        0% {
            left: 20%;
        }
        50% {
            left: 80%;
            height: 0% !important;
        }
        80% {
            height: 0% !important;
            content: none;
        }
    }

    @media (max-width: 760px) {
        h1{
            font-size: 1.8em;
            margin-left: 4% !important;
        }
        h2{
            font-size: 1em;
            margin-top: -15% !important;
            margin-left: 55% !important;
        }
        .watch-woman, .watch-man {
            width: 100%;
            background-size: contain;
            height: 255px;
        }
        .myButton{
            margin-top: 12% !important;
            padding: 3%;
        }
        .main-watch-img{
            margin-top: 15% !important;
        }
        .expertise{
            font-size: 1.5em !important;
        }
        .fade-in-text {
            font-size: 2em !important;
        }
        @keyframes animate {
            0% {
                left: 10%;
                width: 80%;
            }
            50% {
                left: 80%;
                height: 0% !important;
            }
            80% {
                height: 0% !important;
                content: none;
            }
        }
        .footer-text{
            font-size: 1em !important;
        }
    }
        
</style>
