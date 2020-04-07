<template>
  <div class="home-page">
    <div class="page-content">
      <PageInfo title="Welcome To Destiny Tools" body="Below is a range of various tools to assist players in Destiny 2"/>
      <ul>
        <li>
          <router-link to="ArmorScore">Armor Score Calculator</router-link>
        </li>
      </ul>
   
    </div>

  </div>
</template>

<script>
import PageInfo from '../shared/pageInfo';
// import Config from '../../config.json';

  // config({
  //   method: 'get',
  //   url: 'https://www.bungie.net/Platform',
  //   data: {

  //   }
  // });

export default {



  name: 'HomePage',
  props: {
    msg: String
  },
  components: {
    PageInfo
  },
  created(){
    const baseURI = 'https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/-1/dattowatto/'
    this.$http.get(baseURI, {
      headers: {
        'X-API-Key': '83e9e0a68d624819a250c9c6ab8bb5a3',
        'Access-Control-Allow-Origin': '*',
      }
    })
    .then((result) => {
      console.log(result.data);
    })
    .catch(err => {
      console.log(err)
    });  
  }
}
</script>
