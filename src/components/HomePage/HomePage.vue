<template>
  <div class="home-page">
    <div class="page-title">Home</div>
    <div class="page-content">
      <h1>This is Home Page</h1>
      <router-link to="ArmorScore">To Armor Score</router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>
