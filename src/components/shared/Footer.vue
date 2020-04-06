<template>
  <div class="footer">
      <div class="footer-content">
        <div class="left">App Developed by <a href="https://zeoxo.com" target="_blank">zeoxo</a> {{date}} &copy;</div>
        <div class="right">Destiny is a registered trademark of <a href="https://www.bungie.net/" target="_blank">Bungie</a>. Some content and images are the property of Bungie.</div>
      </div>

  </div>
</template>

<script>
import Config from '../../config.json';
export default {
  name: 'Footer',
  props: {
  },
  computed: {
      appName(){
          console.log(Config.appName)
          return Config.appName;
      },
      date(){
        let d = new Date();
        return d.getFullYear();
      }
  }
}
</script>

<style lang='scss' scoped>
@import '../../theme/colors.scss';

.footer{
  font-size: 80%;
  width: 100%;
  padding: 2px;
  padding-left: 10px;
  padding-right: 10px;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: $des-color-background-med;

  .footer-content{
    display: flex;
    justify-content: space-between;
  }
}
</style>
