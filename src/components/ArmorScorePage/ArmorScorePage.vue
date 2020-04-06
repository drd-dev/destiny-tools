<template>
  <div class="armor-score-page">
    <div class="page-content">
      <PageInfo title="Armor Score Calculator" body="Enter your skills to get an armor number"/>
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
import PageInfo from '../shared/pageInfo'

export default {
  name: 'ArmorScorePage',
  components: {
    ArmorScoreForm,
    ArmorScoreResults,
    PageInfo
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
