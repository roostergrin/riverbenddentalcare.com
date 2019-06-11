<template lang="pug" src="./about.pug"></template>

<script>
import HeroPages from 'components/hero/hero-pages/hero-pages'
import InstagramGrid from 'block/block-instagram-grid/block-instagram-grid'

export default {
  computed: {
    props () {
      return this.$store.state.pages.about
    }
  },
  components: {
    HeroPages,
    InstagramGrid
  }
}
</script>
