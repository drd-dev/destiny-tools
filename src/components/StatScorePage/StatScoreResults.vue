<template>
  <div class="item-card">
    <div class="card-header">
        <div class="card-header-title">Stat Score</div>
        <div class="card-header-subtitle">Calculation</div>
    </div>
    <div class="card-body">
        <div class="armor-score">{{statScore}}
          <div class="armor-score-text">Stat Score</div>
        </div>
        <div class="equipped-points">Equipped Points: {{equippedPoints}}
          <div class="text-quiet">(Points currently equipped from gear)</div>
        </div>
        <div class="utilized-points">Utilized Points: {{utilizedPoints}}
          <div class="text-quiet">(Points being applied to your Guardian's stats)</div>
        </div>
        <div class="utilized-points">Efficiency: {{efficiencyComputed}}%
          <div class="text-quiet">(Utilized / Equipped)</div>
        </div>

    </div> 
    <div class="card-footer">
      <hr>
      Stat Score Algorithm by <a href="https://www.youtube.com/channel/UCC4sS1HupTBiJ_JuWA5jucg" target="_blank">OOOG</a>
    </div> 
  </div>
</template>

<script>


export default {
  name: 'StatScoreResults',
  props: {
      stats: Object
  },  
  data(){
    return{
        equippedPoints: 0,
        utilizedPoints: 0,
        wastedPoints: 0,
        efficiency: 0,
        statScore: 0

    }
  },
  mounted(){
    this.calculateArmorScore();
  },
  computed: {
    efficiencyComputed(){
      return Math.round(this.efficiency * 100) / 100;
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
.item-card{
    overflow: hidden;
    max-width: 350px;
    min-width: 270px;

    .card-header{
        background-color: $des-engram-legendary;

        .card-header-title{
            font-weight: 500;
            font-size: 250%;
        }

        .card-header-subtitle{
            font-weight: 350;
            font-size: 15px; 
        }
    }

    .card-body{
        background-color: rgba(0, 0, 0, 0.63);
    }

    .card-footer{
      font-size: 12px;
      background-color: rgba(0, 0, 0, 0.63);
    }

    .armor-score{
      vertical-align: text-top;
      font-size: 400%;

      .armor-score-text{
        display: inline;
        font-size: 40%;
        font-weight: 300;
        padding-top: 10px;
        vertical-align: text-top;
      }
    }

    .text-quiet{
      padding-left: 5px;
      font-size: 13px;
      color: $des-color-text-dark;
    }
}
</style>
