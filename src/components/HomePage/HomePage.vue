<template>
  <div class="home-page">
    <div class="page-content">
      <PageInfo title="Welcome To Destiny Tools" body="Bellow is a range of various tools to assist players in Destiny 2"/>
      <router-link to="ArmorScore">To Armor Score</router-link>
    </div>

  </div>
</template>

<script>
import PageInfo from '../shared/pageInfo';
export default {


  name: 'HomePage',
  props: {
    msg: String
  },
  components: {
    PageInfo
  }
}
</script>
