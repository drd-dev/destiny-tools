<template>
  <label
    v-if="isLoaded"
    class="character-card col-sm"
    v-on:click="emitStats"
    v-bind:class="{loading: !isLoaded, selected: checkSelected}"
  >
    <div class="card-content row">
      <div class="content-top">
        <div class="class-nam">{{getClassName}}</div>
        <div class="light">{{characterData.light}}</div>
      </div>
      <div class="content-bottom">
        <div class="race">
          <!-- Exo Male -->
        </div>
        <div class="level">Level {{level}}</div>
      </div>
    </div>
  </label>
  <div v-else class="character-card col-sm">
    <div class="spinner-border"></div>
  </div>
</template>

<script>
import * as BungieUtils from "../../utils/BungieApiUtils";

export default {
  name: "CharacterCard",
  props: {
    memberID: String,
    characterID: {},
    platform: Number,
    selectedID: String
  },
  data() {
    return {
      characterData: "",
      className: "",
      level: "",
      stats: {},
      isLoaded: false
    };
  },
  mounted() {
    this.getCharacterData();
  },
  computed: {
    getClassName() {
      if (this.characterData.classType === 0) {
        return "Titan";
      } else if (this.characterData.classType === 1) {
        return "Hunter";
      } else if (this.characterData.classType === 2) {
        return "Warlock";
      } else {
        return "Loading...";
      }
    },
    checkSelected() {
        console.log("wee")
        return this.selectedID === this.characterID ? true : false;
    }
  },
  methods: {
    getCharacterData() {
      BungieUtils.getCharacter(
        this.memberID,
        this.characterID,
        this.platform
      ).then(result => {
        let char = result.data.Response.character.data;
        this.characterData = char;
        this.level = char.levelProgression.level;
        this.stats = char.stats;
        this.isLoaded = true;
      });
    },
    emitStats() {
      if (this.isLoaded) {
        this.selected = false;
        this.$emit("statsFromUser", this.stats, this.characterID);
      }
    },
  }
};
</script>



<style lang='scss' scoped>
@import "../../theme/colors.scss";

.character-card {
  margin: 5px;
  border: 2px solid transparent;
  background-color: $des-color-background-med;
  height: 80px;
  width: 360px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 30px;
  cursor: pointer;

  &:hover {
    background-color: $des-color-background-light;
  }

  .card-content {
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .content-top,
  .content-bottom {
    margin-right: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .content-bottom {
    font-size: 15px;
    font-weight: 100;
  }

  .light {
    font-size: 30px;
    color: $des-color-light;
  }
}

.loading {
  background-color: rgba(255, 255, 255, 0.315);
}

.selected {
  border: 2px solid white;
}
</style>
