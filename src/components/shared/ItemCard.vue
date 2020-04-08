<template>
  <div class="item-card">
    <div class="card-header">
        <div class="card-header-title">{{title}}</div>
        <div class="card-header-subtitle">{{subtitle}}</div>
    </div>
    <div class="card-body">
        <div class="main-stat-value">
            <span>{{mainStat.value}}</span>
            <span class="main-stat-label">{{mainStat.label}}</span>
        </div>
        <div v-for="item in body" :key="item.label" class="card-item">
            <span class="card-item-label">{{item.label}} </span>
            <span class="card-item-value">{{item.value}}</span> 
            <div v-if="item.hint" class="card-item-hint">{{item.hint}}</div>
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
    name: 'ItemCard',
    props: {
        title: String,
        subtitle: String,
        mainStat: {label: String, value: Number, hint: String},
        body: Array
    }
}
</script>

<style lang='scss' scoped>
@import '../../theme/colors.scss';
//the information about the page shown at the top
.item-card{
    overflow: hidden;

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

    .main-stat-value{
      vertical-align: text-top;
      font-size: 400%;

      .main-stat-label{
        display: inline;
        font-size: 40%;
        font-weight: 300;
        padding-top: 10px;
        vertical-align: text-top;
      }
    }

    .card-item-label{
        font-size: 20px;
        font-weight: 100;
    }
    .card-item-value{   
        font-size: 20px;
        font-weight: 500;
    }

    .card-item-hint{
        padding-left: 10px;
        font-size: 13px;
        color: $des-color-text-dark;
    }
}
</style>
