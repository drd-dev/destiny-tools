<template>
  <div class="stat-bar">
      <div class="stat-name">{{statName}} Tier: {{Math.floor(progress/10)}}</div>
      <div class="progress">
        <div class="progress-bar" v-bind:style="{width: getWidth + '%' }">
            <div class="progress-bar-segment" style="left: 14%;"></div>
            <div class="progress-bar-segment" style="left: 23%;"></div>
            <div class="progress-bar-segment" style="left: 32%;"></div>
            <div class="progress-bar-segment" style="left: 41%;"></div>
            <div class="progress-bar-segment" style="left: 50%;"></div>
            <div class="progress-bar-segment" style="left: 59%;"></div>
            <div class="progress-bar-segment" style="left: 68%;"></div>
            <div class="progress-bar-segment" style="left: 77%;"></div>
            <div class="progress-bar-segment" style="left: 86%;"></div>
            <div class="progress-bar-text">
                {{Math.floor(progress/10)}} 
            </div>    
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatBar',
  props: [
      'statName',
      'progress'
  ],
  computed:{
      getWidth(){
          if(this.progress > 0){
              return this.progress
          }else{
              return 0;
          }
      }
  }
}
</script>

<style lang="scss" scoped>
@import '../../theme/colors.scss';
    .stat-bar{
        padding-top: 10px;
        max-width: 570px;
    }
    .progress{
        width: 100%;
        margin-top: 2px;
        border-radius: 0px;
        background-color: rgba(255, 255, 255, 0.267) !important;
        height: 22px;
    
        .progress-bar{
            text-align: right;
            text-anchor: end;
            color: black;
            background-color: white !important;
        }

        .progress-bar-text{
            z-index: 100;
            font-size: 15px;
            padding-right: 9px;
        }

        .progress-bar-segment{
            position: absolute;
            bottom: 0;
            border-left: 2px solid $des-color-background-dark;
            height: 22px;
        }
    }

</style>
