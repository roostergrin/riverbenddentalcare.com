<template lang="pug" src="./home.pug"></template>

<script>
import BlockHomeSections from 'block/block-page-section/block-page-section'
import CustomWelcome from 'custom/custom-home-welcome/custom-home-welcome'
import HeroHome from 'components/hero/hero-home/hero-home'
import Testimonials from 'components/testimonials/testimonials-main'

export default {
  computed: {
    props () {
      return this.$store.state.pages.home
    }
  },
  components: {
    BlockHomeSections,
    CustomWelcome,
    HeroHome,
    Testimonials
  }
}
</script>
