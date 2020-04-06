<template>
  <div id="app">
    <NavBar/>
    <router-view class="app-content"/>
    <Footer/>
  </div>
</template>

<script>
import NavBar from './components/shared/NavBar'
import Footer from './components/shared/Footer'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
}
</script>

