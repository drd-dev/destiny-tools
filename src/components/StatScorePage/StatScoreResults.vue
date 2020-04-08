<template>
  <div class="stat-results">
    <ItemCard
      class="item-card"
      title="Stat Score"
      subtitle="Calculation"
      :mainStat="mainStat"
      :body="cardBody"    
    />
  </div>
</template>

<script>
import ItemCard from '../shared/ItemCard'

export default {
  name: 'StatScoreResults',
  props: {
      stats: Object
  }, 
  components: {
    ItemCard
  }, 
  data(){
    return{
        equippedPoints: 0,
        utilizedPoints: 0,
        wastedPoints: 0,
        efficiency: 0,
        statScore: 0,
    }
  },
  computed: {
    efficiencyComputed(){
      return Math.round(this.efficiency * 100) / 100;
    },
    mainStat(){
      return {label: 'Stat Score', value: this.statScore};
    },
    cardBody(){
      return [
        {label: 'Equipped Points: ', value: this.equippedPoints, hint: '(Points from your equipped armor)'},
        {label: 'Utilized Points: ', value: this.utilizedPoints, hint: '(Points being applied to your stats)'},
        {label: 'Efficiency: ', value: this.efficiencyComputed + '%', hint: '(Utilized / Equipped)'}
      ]        
    }
  },
  methods: {
    calculateArmorScore(){
      this.equippedPoints = this.sumObject(this.stats);
      this.utilizedPoints = this.roundAllStats(this.stats);
      this.efficiency = (this.utilizedPoints / this.equippedPoints) * 100;
      this.wastedPoints = (this.equippedPoints - this. utilizedPoints);
      this.statScore = (this.utilizedPoints - this.wastedPoints);
    },
    sumObject(object) {
        return Object.values(object).reduce((a, b) => a + b);
    },
    roundAllStats(object){
        let r = 0;
        let array = Object.values(object);
        array.forEach(element => {
            r += this.moveDecimal(element);
        });
        return r;
  },
    moveDecimal(n) {
    let string = n.toString();
    let removed = string.substring(0, string.length -1);
    removed += 0;
    return parseInt(removed);
    }

  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../theme/colors.scss';
.stat-results{
  width: 370px;
  max-width: 370px;
  min-width: 280px;
}
</style>
