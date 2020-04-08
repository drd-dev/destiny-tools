<template>
  <div class="footer">
      <div class="footer-content">
        <div class="left"> v{{version}} | &copy; <a href="https://zeoxo.com" target="_blank">zeoxo</a> {{date}} | <a href="https://github.com/zeoxo/destiny-tools" target="_blank">Source</a> |<a href="https://ko-fi.com/zeoxo_" target="_blank"> Donate</a></div>
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
    version(){
      return Config.version;
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
  z-index: 1000;
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
