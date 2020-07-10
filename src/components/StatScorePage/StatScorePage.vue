<template>
  <div class="page-content container-fluid">
    <PageInfo title="Stat Score Calculator" 
      class="col"
      body="Enter your armor stats to get back a score"/>
    
    <div class="player-search">
      <form onsubmit="return false">
        <label>Enter Username</label>
        <input  type="text" class="form-control des-input-dark"  v-model="userNameSearch">
        <button type="submit" class="get-user des-btn-green" :disabled="userNameSearch === ''" v-on:click="getUsers()">Search</button>
      </form>

      <div class="account-cards" v-if="accountsFound.length > 0">
        <h3 style="font-size: 20px; padding-top: 30px">Select Account</h3>
        <AccountCard
          v-for="account in accountsFound" v-bind:key="account.membershipID"
          :account ="account"
          @accountSelected="getCharacterIDs"
          :selectedID="selectedAccountID"
        
        />
      </div>

      <h3 style="font-size: 20px; padding-top: 30px" v-if="user.charactersIDs.length > 0">{{user.displayName}}'s Guardians:</h3>
      <h2 v-if="noUser" style="text-align: center;">No User Found</h2>
      <div class="spinner-border" v-if="isloading"></div>
      <div class="character-cards row"> 
        <CharacterCard
          class="col"
          ref ='charCard'
          v-for="characterID in user.charactersIDs" 
          :key="characterID" 
          :platform="user.platform"
          :memberID="user.membershipID"
          :characterID="characterID"
          :selectedID="selectedID"
          @statsFromUser="updateStats"/>      
      </div>
    </div>
    <div class="score-calculator row">
      <StatScoreForm 
        class="form col-sm"
        @calculateClicked="calculateClicked"
        :stats="stats"
        />
      <StatScoreResults class="col-sm" ref="results" :stats="stats" />      
    </div>
    
  </div>
</template>

<script>
import StatScoreForm from './StatScoreForm';
import StatScoreResults from './StatScoreResults';
import PageInfo from '../shared/pageInfo';
import CharacterCard from '../shared/CharacterCard';
import AccountCard from '../shared/AccountCard'

import * as BungieAPI from '../../utils/BungieApiUtils';

export default {
  name: 'StatScorePage',
  components: {
    StatScoreForm,
    StatScoreResults,
    PageInfo,
    CharacterCard,
    AccountCard
  },
  data(){
    return{
        stats: {
          mobility: '',
          resilience: '',
          recovery: '',
          discipline: '',
          intellect: '',
          strength: ''
      },
      accountsFound: [],
      userNameSearch: '',
      noUser: false,
      user:{
        displayName:'',
        membershipID: '',
        charactersIDs: [],
        platform: 0
      },
      isloading: false,
      selectedID: '',
      selectedAccountID: ''
    }
  },
  methods: {
    calculateClicked(data){
      this.$refs.results.calculateArmorScore();
      this.stats = data;
    },
    //returns a list of possible users that match the search term
    getUsers(){
      this.isloading = true;
      this.noUser = false;
      this.accountsFound = [];
      this.selectedID = ''
      this.selectedAccountID = ''
      this.user ={
        displayName: '',
        membershipID: '',
        platform: '',
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


      BungieAPI.searchDestinyPlayers(this.userNameSearch).then(result => {
        this.accountsFound = result.data.Response;
        this.isloading = false;
      })
    },
    getCharacterIDs(account){
      console.log(account);
      this.isloading = true;
      this.noUser = false;
      this.selectedAccountID = account.membershipId;
      this.user ={
        displayName: account.displayName,
        membershipID: account.membershipId,
        platform: parseInt(account.membershipType),
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
        //get the user's character's IDs
        BungieAPI.getProfile(this.user.membershipID, this.user.platform).then((result) =>{
          this.user.charactersIDs = Object.keys(result.data.Response.characters.data);
          this.isloading = false;
        })
    },
    updateStats(stats, data){
      const values = Object.values(stats);
      this.stats.mobility = values[5];
      this.stats.resilience = values[1];
      this.stats.recovery = values[4];
      this.stats.discipline = values[2];
      this.stats.intellect = values[0];
      this.stats.strength = values[6];
      this.$refs.results.calculateArmorScore();
      this.selectedID = data;
    }
  }


}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../theme/colors.scss';

.player-search{
  margin: 0 auto;
  width: 60%;
  margin-bottom: 30px;
}

.score-calculator{
  margin: 0 auto;
  width: 60%;
  
}
@media only screen and (max-width: 600px) {
  .score-calculator {
      width: 100%;
  }
}
</style>
