<template>
  <div class="home-page">
    <div class="page-content">
      <PageInfo title="Welcome To Destiny Tools" body="Below is a range of various tools to assist players in Destiny 2 (Right now there is only one)"/>
      <ul>
        <li>
          <router-link to="StatScore">Stat Score Calculator</router-link>
        </li>
      </ul>
      <ItemCard 
        title="test Title"
        subtitle="test sub"
        :mainStat="mainStat"
        :body="cardBody"
        />
    </div>

  </div>
</template>

<script>
import PageInfo from '../shared/pageInfo';
import ItemCard from '../shared/ItemCard'
export default {



  name: 'HomePage',
  data(){
    return{
      mainStat: {label: "Armor Score", value: 160},
      cardBody: [
        {label: "label1:", value:200},
        {label: "label2:", value:300}
      ]
    }
  },
  components: {
    PageInfo,
    ItemCard
  }
}
</script>
