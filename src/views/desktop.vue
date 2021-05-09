<template>
  <div class="main">
    <div class="qrcode">
      <img src="~@img/qrcode.jpg" alt="扫码观看">
    </div>
  </div>
</template>

<style lang="stylus" scoped>
@import "~@styl/config"

.qrcode
  position absolute
  top 50%
  left 50%
  width 300px
  height 300px
  margin-top -150px
  margin-left -150px
  overflow hidden
  img
    width 100%
    height 100%
</style>
