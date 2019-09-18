<template lang="pug" src="./sitemap.pug"></template>

<script>
import HeroPages from 'components/hero/hero-pages/hero-pages'

export default {
  computed: {
    props () {
      return this.$store.state.pages['sitemap']
    }
  },
  components: {
    HeroPages
  }
}
</script>

<style>
.pages-thank-you {
  height: calc(100vh - 291px);
}

.pages-thank-you__text {
  padding-top: 2rem;
  text-align: center;
}

.sitemap-content{
  padding: 30px 0px;
}
</style>
