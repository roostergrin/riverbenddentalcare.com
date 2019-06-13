<template lang="pug" src="./about.pug"></template>

<script>
import CustomSection from 'custom/custom-about-section/custom-about-section'
import HeroPages from 'components/hero/hero-pages/hero-pages'
import InstagramGrid from 'block/block-instagram-grid/block-instagram-grid'

import BlockAccordion from 'block/block-accordion/block-accordion'

export default {
  computed: {
    props () {
      return this.$store.state.pages.about
    }
  },
  components: {
    BlockAccordion,
    CustomSection,
    HeroPages,
    InstagramGrid
  }
}
</script>
