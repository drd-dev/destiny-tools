<template>
  <div class="armor-score-form">
      <form>
          <div class="row">
              <div class="col">
                  <label for="#mobility" class="des-form-label">Mobility: </label>
                  <input 
                    id="mobility" 
                    name="mobility" 
                    class="form-control des-input-dark" 
                    max="120" 
                    type="number"
                    v-model.number="stats.mobility">
              </div>
              <div class="col">
                  <label for="#resilience" class="des-form-label">Resilience: </label>
                  <input 
                    id="resilience" 
                    name="resilience" 
                    class="form-control des-input-dark" 
                    type="number"
                    v-model.number="stats.resilience">
              </div>
          </div>
          <div class="row">
              <div class="col">
                  <label for="#recovery" class="des-form-label">Recovery: </label>
                  <input 
                    id="recovery" 
                    name="recovery" 
                    class="form-control des-input-dark" 
                    type="number"
                    v-model.number="stats.recovery">
              </div>
              <div class="col">
                  <label for="#discipline" class="des-form-label">Discipline: </label>
                  <input 
                    id="discipline" 
                    name="discipline" 
                    class="form-control des-input-dark" 
                    type="number"
                    v-model.number="stats.discipline">
              </div>
          </div>
          <div class="row">
              <div class="col">
                  <label for="#intellect" class="des-form-label">Intellect: </label>
                  <input 
                    id="intellect" 
                    name="intellect" 
                    class="form-control des-input-dark" 
                    type="number"
                    v-model.number="stats.intellect">
              </div>
              <div class="col">
                  <label for="#strength" class="des-form-label">Strength: </label>
                  <input 
                    id="strength" 
                    name="strength" 
                    class="form-control des-input-dark" 
                    type="number"
                    v-model.number="stats.strength">
              </div>
          </div>
          <div class="row" id="button-row">
            <button type="button" v-on:click="submitStats()" v-bind:disabled="isCalculateReady" class="des-btn-green">Calculate</button>
          </div>

      </form>
  </div>
</template>

<script>
export default {
  name: 'ArmorScoreForm',
  data (){
      return {
        stats: {
            mobility: 0,
            resilience: 0,
            recovery: 0,
            discipline: 0,
            intellect: 0,
            strength: 0
        }
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

.row{
  margin: 0 auto;
  max-width: 600px;
}

#button-row{
  margin: 0 auto;
  margin-top: 40px;
  max-width: 300px;
}
</style>
