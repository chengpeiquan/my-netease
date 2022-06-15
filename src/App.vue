<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import '@styl/normalize.styl'
import '@styl/global.styl'
import Home from '@views/home.vue'

export default {
  name: 'App',
  components: {
    Home,
  },
  data() {
    return {
      isMobile: /iPhone|phone|android|iPod|pad|iPad/i.test(
        navigator.userAgent.toLowerCase()
      ),
    }
  },
  created() {
    if (!this.isMobile) {
      window.location.href = 'https://chengpeiquan.com/article/my-netease.html'
    }
  },
}
</script>
