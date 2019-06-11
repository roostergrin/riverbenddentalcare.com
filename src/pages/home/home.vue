<template lang="pug" src="./home.pug"></template>

<script>
import BlockHomeSections from 'block/block-page-section/block-page-section'
import CustomHomeInstagram from 'custom/custom-home-instagram/custom-home-instagram'
import CustomWelcome from 'custom/custom-home-welcome/custom-home-welcome'
import HeroHome from 'components/hero/hero-home/hero-home'

export default {
  computed: {
    props () {
      return this.$store.state.pages.home
    }
  },
  components: {
    BlockHomeSections,
    CustomHomeInstagram,
    CustomWelcome,
    HeroHome
  }
}
</script>
