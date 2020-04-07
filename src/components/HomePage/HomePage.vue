<template>
  <div class="home-page">
    <div class="page-content">
      <PageInfo title="Welcome To Destiny Tools" body="Below is a range of various tools to assist players in Destiny 2"/>
      <ul>
        <li>
          <router-link to="ArmorScore">Armor Score Calculator</router-link>
        </li>
      </ul>
        <label for="">Enter Username</label>
        <input type="text" class="form-control" v-model="userNameSearch">
        <button type="button" v-on:click="getUser()">Get User</button>
        <p>FoundUser with membership ID: {{user.membershipID}}</p>
        <p>displayName: {{user.displayName}}</p>
        <p>Characters: {{user.characters}}</p>
    </div>

  </div>
</template>

<script>
import PageInfo from '../shared/pageInfo';
import * as BungieAPI from '../../utils/BungieApiUtils';
export default {



  name: 'HomePage',
  props: {
    msg: String
  },
  components: {
    PageInfo
  },
  data (){
    return {
      userNameSearch: 'zeoxo',
      user:{
        displayName:'',
        membershipID: '',
        characters: ''
      }
    }
  },
  methods: {
    getUser(){
      BungieAPI.getMembershipID(this.userNameSearch).then((result) => {

        //store the membershipID and display name
        this.user.membershipID = result.data.Response[0].membershipId;
        this.user.displayName = result.data.Response[0].displayName;

        BungieAPI.getProfile(this.user.membershipID, 'TigerSteam').then((result) =>{
          this.user.characters = result.data.Response.characters.data;
        })
      });
    }
  }
}
</script>
