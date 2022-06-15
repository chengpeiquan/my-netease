<template>
  <div class="music">
    <audio ref="bgm" :src="music" loop preload></audio>

    <!-- 播放按钮 -->
    <div
      class="control"
      :class="[{ pause: !isPlaying }, { rotating: isPlaying }]"
      @click="control"
    ></div>
    <!-- 播放按钮 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlaying: false,
      isHasFirstTouched: false,
      music: '//cdn.chengpeiquan.com/mp3/jingzizhong.mp3',
    }
  },
  computed: {
    bgm() {
      return this.$refs.bgm
    },
  },
  mounted() {
    this.initMusic()
  },
  methods: {
    initMusic() {
      // 触屏开始播放
      document.addEventListener('touchstart', () => {
        if (!this.isPlaying && !this.isHasFirstTouched) {
          this.play()
          this.isHasFirstTouched = true
        }
      })
    },
    control() {
      this.isPlaying ? this.pause() : this.play()
    },
    play() {
      this.bgm.play()
      this.isPlaying = true
    },
    pause() {
      this.bgm.pause()
      this.isPlaying = false
    },
  },
}
</script>

<style lang="stylus" scoped>
@import "~@styl/config"

.music
  position absolute
  top $margin
  left $margin
  width 50px
  height @width
  // background-color #fff000
  z-index 99
  audio
    opacity 0
  .control
    position absolute
    top 0
    left 0
    width 100%
    height @width
    background-image url('//cdn.chengpeiquan.com/my-netease/img/music.png')
    background-repeat no-repeat
    background-position center
    background-size 100% 100%
    &.pause
      background-image url('//cdn.chengpeiquan.com/my-netease/img/music-pause.png')
</style>
