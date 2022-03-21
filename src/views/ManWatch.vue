<template>
    <h1>MONTRES HOMMES</h1>
</template>

<script>
export default {
    name: 'ManWatch',
    data(){
        return {
        }
    },
}
</script>

<style scoped>
    h1{
        padding-top: 50%;
        text-align: center;
        transform: translateY(-50%);
    }
    /* Media queries */
    @media (max-width: 760px) {
        h1{
            padding-top: 50%;
            font-size: 1.3em;
        }
    }
    
</style>