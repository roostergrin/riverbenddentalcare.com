<template lang="pug" src="./about.pug"></template>

<script>
import HeroPages from 'components/hero/hero-pages/hero-pages'

export default {
  computed: {
    props () {
      return this.$store.state.pages.about
    }
  },
  components: {
    HeroPages
  }
}
</script>
