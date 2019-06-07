<template lang="pug" src="./home.pug"></template>

<script>
import HeroHome from 'components/hero/hero-home/hero-home'

export default {
  computed: {
    props () {
      return this.$store.state.pages.home
    }
  },
  components: {
    HeroHome
  }
}
</script>
