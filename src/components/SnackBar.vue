<template>
    <div class="snack-bloc">
        <p>Vous êtes déjà connecté</p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .snack-bloc{
        height: 70px;
        width: 220px;
        border-radius: 4px;
        background-color: rgb(115, 194, 115);
        position: fixed;
        margin-top: 6.5% !important;
        margin-left: 1% !important;
        z-index: 300;
    }
    p{
        text-align: center;
        padding-top: 12%;
        font-weight: bold;
        color: whitesmoke;
    }

    /* Media queries */
    @media (max-width: 760px) {
        .snack-bloc{
            margin-top: 16% !important;
            height: 50px;
            width: 180px;
        }
        p {
            font-size: 0.8em;
            padding-top: 9%;
        }
    }
</style>