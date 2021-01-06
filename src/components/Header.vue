<template>
  <header class="header">
    <span
      class="item"
      :class="{ cur: index === page }"
      v-for="(item, index) in yearList"
      :key="index"
      @click="$emit('turnPage', index)"
    >
      {{ item }}
    </span>
  </header>
</template>

<script>
export default {
  props: ['page'],
  data() {
    return {
      yearList: [
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020'
      ]
    }
  },
  mounted () {
  },
  methods: {
  }
};
</script>

<style lang="stylus" scoped>
@import "~@styl/config"

.header
  display flex
  position absolute
  bottom 0px
  left 0px
  width 100%
  height 100px
  z-index 1
  .item
    display flex
    flex 1
    align-items center
    justify-content center
    text-align center
    color $color-note
    font-size 32px
    font-weight bold
    text-decoration none
    background-color rgba(0, 0, 0, 0.6)
    border-top 2px solid rgba(0, 0, 0, 1)
    &.cur
      color $color-text
</style>
