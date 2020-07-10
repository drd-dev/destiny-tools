<template>
  <label
    class="character-card col-sm"
    v-on:click="emitSelected"
    v-bind:class="{selected: checkSelected}"
  >
    <div class="card-content row">
        {{account.displayName}}
  </div>
  </label>
</template>

<script>
// import * as BungieUtils from "../../utils/BungieApiUtils";

export default {
  name: "AccountCard",
  props: {
    account: Object,
    selectedID: String,
  },
  data() {
    return {
      isLoaded: true
    };
  },
  computed:{
    checkSelected() {
        console.log("checking ID")
        return this.selectedID === this.account.membershipId ? true : false;
    }
  },
  methods: {
      emitSelected(){
          this.$emit("accountSelected", this.account)
      }
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
