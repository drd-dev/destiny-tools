<template>
  <div class="armor-score-form">
      <form>
          <div class="row">
              <div class="col-sm">
                  <label for="#mobility" class="des-form-label">Mobility: </label>
                  <input 
                    id="mobility" 
                    placeholder="Mobility"
                    name="mobility" 
                    class="form-control des-input-dark" 
                    max="120" 
                    type="number"
                    v-model.number="stats.mobility">
                    <StatBar statName="Mobility" :progress="stats.mobility"/>
              </div>
              <div class="col-sm">
                  <label for="#resilience" class="des-form-label">Resilience: </label>
                  <input 
                    id="resilience" 
                    placeholder="Resilience"
                    name="resilience" 
                    class="form-control des-input-dark" 
                    type="number"
                    v-model.number="stats.resilience">
                    <StatBar statName="Resilience" :progress="stats.resilience"/>
              </div>
          </div>
          <div class="row">
              <div class="col-sm">
                  <label for="#recovery" class="des-form-label">Recovery: </label>
                  <input 
                    id="recovery" 
                    placeholder="Recovery"
                    name="recovery" 
                    class="form-control des-input-dark" 
                    type="number"
                    v-model.number="stats.recovery">
                    <StatBar statName="Recovery" :progress="stats.recovery"/>
              </div>
              <div class="col-sm">
                  <label for="#discipline" class="des-form-label">Discipline: </label>
                  <input 
                    id="discipline"
                    placeholder="Discipline" 
                    name="discipline" 
                    class="form-control des-input-dark" 
                    type="number"
                    v-model.number="stats.discipline">
                    <StatBar statName="Discipline" :progress="stats.discipline"/>
              </div>
          </div>
          <div class="row">
              <div class="col-sm">
                  <label for="#intellect" class="des-form-label">Intellect: </label>
                  <input 
                    id="intellect"
                    placeholder="Intellect" 
                    name="intellect" 
                    class="form-control des-input-dark" 
                    type="number"
                    v-model.number="stats.intellect">
                    <StatBar statName="Intellect" :progress="stats.intellect"/>
              </div>
              <div class="col-sm">
                  <label for="#strength" class="des-form-label">Strength: </label>
                  <input 
                    id="strength"
                    placeholder="Strength" 
                    name="strength" 
                    class="form-control des-input-dark" 
                    type="number"
                    v-model.number="stats.strength">
                    <StatBar statName="Strength" :progress="stats.strength"/>
              </div>
          </div>
          <div class="row" id="button-row">
            <button type="button" v-on:click="submitStats()" v-bind:disabled="isCalculateReady" class="des-btn-green">Calculate</button>
          </div>

      </form>
  </div>
</template>

<script>
import StatBar from '../shared/StatBar'

export default {
  name: 'StatScoreForm',
  components: {
    StatBar
  },
  props:{
    stats: {
        mobility: Number,
        resilience: Number,
        recovery: Number,
        discipline: Number,
        intellect: Number,
        strength: Number
    }
  },
  computed:{
      isCalculateReady(){
        let array = Object.values(this.stats);
        let lowFound = false;
        array.forEach(element => {
        if (element < 1){
            lowFound = true;
            return;
        }    
        });
        return lowFound;
      }
  },
  methods: {
      submitStats(){
        this.$emit('calculateClicked', this.stats);
      }
  }
}
</script>

<style lang='scss' scoped>

  label{
    margin-top: 20px;
  }

#button-row{
  margin: 0 auto;
  margin-top: 40px;
  max-width: 300px;
}
</style>
