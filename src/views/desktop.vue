<template>
  <div class="main">
    <div class="qrcode" style="width: 300px; height: 300px; margin-top: -150px; margin-left: -150px;">
      <img src="~@img/qrcode.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<style lang="stylus" scoped>
@import "~@styl/config"

.qrcode
  position absolute
  top 50%
  left 50%
  overflow hidden
  img
    width 100%
    height 100%
</style>
