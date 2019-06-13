<template lang="pug" src="./about.pug"></template>

<script>
import CustomSection from 'custom/custom-about-section/custom-about-section'
import HeroPages from 'components/hero/hero-pages/hero-pages'
import InstagramGrid from 'block/block-instagram-grid/block-instagram-grid'

export default {
  computed: {
    props () {
      return this.$store.state.pages.about
    }
  },
  components: {
    CustomSection,
    HeroPages,
    InstagramGrid
  }
}
</script>
