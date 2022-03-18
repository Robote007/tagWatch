<template>
    <div>
        <p style="padding-top: 10%">Mon Panier</p>
    </div>
</template>


<script>
export default {
  name: 'Panier',
  components: {
  },
 
  methods: {
    goToUnivers(){
        this.$router.push('/montres'); 
      console.log('univers');
    }
  }
}
</script>

<style scoped>
        
</style>
