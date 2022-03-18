<template>
  <div class="about">
    <h1 style="padding-top: 10%">La collection de montres</h1>
    <div class="card-container" >
        <Card :montres="watchs"/>
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
          'watchs'
      ]),
  },
  methods: {
  }
}
</script>

<style scoped>
  .card-container{
      display: flex !important;
      flex-direction: row !important;
      flex-wrap: wrap;
  }
</style>