<template>
  <div class="main">
    <!-- 加载状态 -->
    <Loading />
    <!-- 加载状态 -->

    <!-- 背景音乐 -->
    <Music />
    <!-- 背景音乐 -->

    <!-- 内容页面 -->
    <swiper
      ref="mySwiper"
      class="swiper swiper-no-swiping"
      :options="swiperOption"
    >
      <swiper-slide class="page page-1">
        <Page1 />
      </swiper-slide>

      <swiper-slide class="page page-2">
        <Page2 />
      </swiper-slide>

      <swiper-slide class="page page-3">
        <Page3 />
      </swiper-slide>

      <swiper-slide class="page page-4">
        <Page4 />
      </swiper-slide>

      <swiper-slide class="page page-5">
        <Page5 />
      </swiper-slide>

      <swiper-slide class="page page-6">
        <Page6 />
      </swiper-slide>
    </swiper>
    <!-- 内容页面 -->

    <!-- 年份导航 -->
    <Header @turnPage="turnPage(arguments)" :page="page" />
    <!-- 年份导航 -->
  </div>
</template>

<script>
import Loading from '@cp/Loading'
import Music from '@cp/Music'
import Header from '@cp/Header'
import Page1 from '@cp/Page1'
import Page2 from '@cp/Page2'
import Page3 from '@cp/Page3'
import Page4 from '@cp/Page4'
import Page5 from '@cp/Page5'
import Page6 from '@cp/Page6'

export default {
  components: {
    Loading,
    Music,
    Header,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
  },
  data() {
    return {
      page: 0,
      swiperOption: {
        direction: 'vertical',
        speed: 800,
        resistanceRatio: 0,
        effect: 'fade',
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  methods: {
    turnPage(args) {
      const page = args[0]
      this.page = page
      this.swiper.slideTo(page)
      document.querySelector(`.page-${page + 1} .content`).scrollTop = 0
    },
  },
}
</script>

<style lang="stylus" scoped>
@import "~@styl/config"

.swiper-container
  position absolute
  top 0
  left 0
  width 100%
  height 100%
  overflow hidden
</style>
