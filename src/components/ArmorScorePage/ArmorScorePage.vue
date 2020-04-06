<template>
  <div class="armor-score-page">
    <div class="page-title">Armor Score Calculator</div>
    <div class="page-content">
      <div class="page-info">
        <h2 class="page-info-title">Calculate Your Relative Skill Score</h2>
        <p class="page-info-body">Enter your current skills to get an armor rating</p>
        <hr>
      </div>
      <ArmorScoreForm 
        class="armor-score-form"
        @calculateClicked="calculateClicked"/>
      <ArmorScoreResults class="results" ref="results" :stats="stats" v-if="calculatePressed" />
    </div>
    
  </div>
</template>

<script>
import ArmorScoreForm from './ArmorScoreForm'
import ArmorScoreResults from './ArmorScoreResults'

export default {
  name: 'ArmorScorePage',
  components: {
    ArmorScoreForm,
    ArmorScoreResults
  },
  data(){
    return{
      calculatePressed: false,
      stats: {}
    }
  },
  methods: {
    calculateClicked(data){
      if(this.calculatePressed === true){this.$refs.results.calculateArmorScore()}
      this.calculatePressed = true;
      this.stats = data;
    }
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.results{
  padding-top: 30px;
  margin: 0 auto;
}
</style>
