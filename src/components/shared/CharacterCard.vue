<template>
  <div class="character-card col-sm">
      <div class="card-content row">
        <div class="content-top">
            <div class="class-nam">
                {{getClassName}}
            </div>
            <div class="light">
                {{characterData.light}}
            </div>
        </div>
        <div class="content-bottom">
            <div class="race">
                Exo Male
            </div>
            <div class="level">
                Level {{level}}
            </div>
        </div>

      </div>

  </div>
</template>

<script>
import * as BungieUtils from '../../utils/BungieApiUtils';

export default {
  name: 'CharacterCard',
  props: {
      memberID: String,
      characterID: {},
  },
  data(){
      return{
          characterData: '',
          className: '',
          level: ''
      }
  },
  mounted(){
      this.getCharacterData();
  },
  computed:{
      getClassName(){
            if(this.characterData.classType === 0){
                return 'Titan';
            }else if(this.characterData.classType === 1){
                return 'Hunter';
            }else{
                return 'Warlock';
            }
      }
  },
  methods: {
    getCharacterData(){
      BungieUtils.getCharacter(this.memberID,this.characterID).then((result) => {
          let char = result.data.Response.character.data
          this.characterData = char;
          this.level = char.levelProgression.level;
      })
    }
  }
}
</script>



<style lang='scss' scoped>
@import '../../theme/colors.scss';

.character-card{
    background-color: $des-color-background-light;
    height: 80px;
    width: 360px;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 30px;

    .card-content{
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .content-top, .content-bottom{
        margin-right: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;    
        align-items: center;    
    }

    .content-bottom{
        font-size: 15px;
        font-weight: 100;
    }

    .light{
        font-size: 30px;
        color: $des-color-light;
    }


}

</style>
