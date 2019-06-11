<template lang="pug" src="./home.pug"></template>

<script>
import CustomHomeInstagram from 'custom/custom-home-instagram/custom-home-instagram'
import CustomHomeSections from 'custom/custom-home-sections/custom-home-sections'
import CustomWelcome from 'custom/custom-home-welcome/custom-home-welcome'
import HeroHome from 'components/hero/hero-home/hero-home'

export default {
  computed: {
    props () {
      return this.$store.state.pages.home
    }
  },
  components: {
    CustomHomeInstagram,
    CustomHomeSections,
    CustomWelcome,
    HeroHome
  }
}
</script>
