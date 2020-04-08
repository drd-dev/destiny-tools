<template>
  <div class="armor-score-page">
    <div class="page-content">
      <PageInfo title="Stat Score Calculator" 
        body="Enter your armor stats to get back a score"/>
      
      <div class="player-search">
        <label for="">Enter Username</label>
        <input type="text" class="form-control des-input-dark"  v-model="userNameSearch">
        <button type="button" class="des-btn-green" v-on:click="getCharacterIDs()">Get User</button>
        <h3 v-if="user.charactersIDs.length > 0">Select a Character</h3>
        <div class="row my-auto"> 
          <h2 v-if="noUser" style="text-align: center;">No User Found</h2>
          <CharacterCard
            ref ='charCard'
            v-for="characterID in user.charactersIDs" 
            :key="characterID" 
            :memberID="user.membershipID"
            :characterID="characterID"
            @statsFromUser="updateStats"/>
        </div>
     
      </div>
      
      <StatScoreForm 
        class="armor-score-form"
        @calculateClicked="calculateClicked"
        :stats="stats"
        />
      <StatScoreResults class="results" ref="results" :stats="stats" v-if="calculatePressed" />
    </div>
    
  </div>
</template>

<script>
import StatScoreForm from './StatScoreForm'
import StatScoreResults from './StatScoreResults'
import PageInfo from '../shared/pageInfo'
import CharacterCard from '../shared/CharacterCard'

import * as BungieAPI from '../../utils/BungieApiUtils';

export default {
  name: 'StatScorePage',
  components: {
    StatScoreForm,
    StatScoreResults,
    PageInfo,
    CharacterCard
  },
  data(){
    return{
      calculatePressed: false,
        stats: {
          mobility: '',
          resilience: '',
          recovery: '',
          discipline: '',
          intellect: '',
          strength: ''
      },
      userNameSearch: '',
      noUser: false,
      user:{
        displayName:'',
        membershipID: '',
        charactersIDs: [],
      }
    }
  },
  methods: {
    calculateClicked(data){
      if(this.calculatePressed === true){this.$refs.results.calculateArmorScore()}
      this.calculatePressed = true;
      this.stats = data;
    },
    getCharacterIDs(){
      this.noUser = false;
      this.user ={
        displayName:'',
        membershipID: '',
        charactersIDs: [],
      }
      this.stats = {
          mobility: '',
          resilience: '',
          recovery: '',
          discipline: '',
          intellect: '',
          strength: ''
      },
      BungieAPI.getMembershipID(this.userNameSearch).then((result) => {
        //store the membershipID and display name
        this.user.membershipID = result.data.Response[0].membershipId;
        this.user.displayName = result.data.Response[0].displayName;

        //get the user's character's IDs
        BungieAPI.getProfile(this.user.membershipID, 'TigerSteam').then((result) =>{
          this.user.charactersIDs = Object.keys(result.data.Response.characters.data);
        })
      }).catch((error) => {
        console.log(error);
        this.noUser = true;
      })
    },
    updateStats(stats){
      const values = Object.values(stats);
      this.stats.mobility = values[5];
      this.stats.resilience = values[1];
      this.stats.recovery = values[4];
      this.stats.discipline = values[2];
      this.stats.intellect = values[0];
      this.stats.strength = values[6];
    }
  }


}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.results{
  padding-top: 30px;
  margin: 0 auto;
}

.player-search{
  margin: 0 auto;
  width: 60%;
}
</style>
