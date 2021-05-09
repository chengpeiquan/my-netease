<template>
  <div id="app">
    <router-view :key="key"></router-view>
  </div>
</template>

<script>
import '@styl/normalize.styl'
import '@styl/global.styl'

export default {
  name: 'App',
  data () {
    return {
      isMobile: /iPhone|phone|android|iPod|pad|iPad/i.test( navigator.userAgent.toLowerCase() ),
    }
  },
  computed: {
    key () {
      return this.$route.name !== undefined ? this.$route.name + new Date() : this.$route.path + new Date();
    }
  },
  mounted () {
    this.setWebstieInfo();
  },
  watch: {
    $route (to, from) {
      if ( to.name === 'home' && !this.isMobile ) {
        this.$router.replace({
          name: 'desktop'
        });
      }
      else if ( to.name === 'desktop' && this.isMobile ) {
        this.$router.replace({
          name: 'home'
        });
      }
    }
  },
  methods: {
    setWebstieInfo () {
      // 设置站点标题
      document.title = this.$config.title;

      // 设置站点图标
      const shortcut = document.createElement('link');
      shortcut['rel'] = 'shortcut icon';
      shortcut['href'] = this.$config.favicon;
      document.querySelector('head').appendChild(shortcut);
    }
  }
};
</script>
