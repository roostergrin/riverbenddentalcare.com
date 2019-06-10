<template lang="pug" src="./home.pug"></template>

<script>
import CustomWelcome from 'custom/custom-home-welcome/custom-home-welcome'
import HeroHome from 'components/hero/hero-home/hero-home'

export default {
  computed: {
    props () {
      return this.$store.state.pages.home
    }
  },
  components: {
    CustomWelcome,
    HeroHome
  }
}
</script>
