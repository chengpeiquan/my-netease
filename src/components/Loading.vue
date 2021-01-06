<template>
  <div
    class="loading"
    :class="{ fadeOut: !isLoading }"
    v-if="isShow"
  >
    <div class="me">
      <img
        ref="me"
        class="top"
        :style="`clip: rect(0px, ${width}px, ${height}px, 0px);`"
        src="~@img/me-real.jpg"
        alt=""
      >
      <img
        class="bottom"
        src="~@img/me.jpg"
        alt=""
      >
      <div class="progress">{{ progress }}%</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: true,
      isShow: true,
      width: 0,
      height: 0,
      realHeight: 0,
      progress: 0,
      mainfest: []
    }
  },
  mounted () {
    this.initLoading();
  },
  methods: {
    initLoading () {
      const pic = new Image();
      pic.onload = () => {
        // 因为是移动端，不能直接获取px，要获取渲染后dom的宽度高度
        const me = this.$refs.me;
        this.width = me.width;
        this.height = me.height;
        this.realHeight = me.height;
        // console.log(this.width, this.height, this.realHeight)

        // 开始loading
        this.startLoading();
      }
      pic.src = require('@img/me.jpg');
    },
    startLoading () {
      let time = Math.ceil( Math.random() * 100 );

      const load = setInterval( () => {
        // 拉起盖在上层的真人照
        if ( this.height > 0 ) {
          // 重新生成随机时间，显得逼真一些
          time = Math.ceil( Math.random() * 100 );

          // 通过减少高度来实现画布拉起效果
          this.height--;

          // 计算剩余高度跟真实高度之间的占比，用于计算拉取进度
          const pre = Math.ceil( (this.height / this.realHeight) * 100 );
          this.progress = 100 - pre;
        }
        // 拉起完毕
        else {
          // 记得要清除定时器
          clearInterval(load);

          // 关闭loading状态，用于绑定fadeOut的样式
          this.isLoading = false;

          // fadeOut之后，销毁loading组件
          setTimeout( () => {
            this.isShow = false;
          }, 500);
        }
      }, time);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import "~@styl/config"

.loading
  position absolute
  top 0px
  left 0px
  width 100%
  height 100%
  background-color $color-bg
  z-index 999
  .me
    position absolute
    top 50%
    left 50%
    width 400px
    height @width
    margin-top -(@height / 2) - 3px - 50px
    margin-left -(@width / 2) - 3px
    border 6px solid $color-white
    border-radius 50%
    .top, .bottom
      position absolute
      top 0px
      left 0px
      width 100%
      height 100%
      border-radius 50%
    .top
      z-index 1
    .progress
      position absolute
      bottom -100px
      left 0px
      width 100%
      height 100px
      line-height @height 
      font-size 32px
      font-weight bold
      text-align center
      color $color-text
</style>
