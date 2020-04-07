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
import Config from '../../config.json';

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
    const baseURI = 'https://www.bungie.net/Platform/Trending/Categories/'
    // const path = '/App/FirstParty/';
    this.$http.get(baseURI, {
      headers: {
        'Access-Control-Allow-Origin': 'https://www.bungie.net',
        'X-API-Key': Config.destinyApi.apiKey,

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
