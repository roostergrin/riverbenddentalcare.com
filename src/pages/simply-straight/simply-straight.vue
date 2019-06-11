<template lang="pug" src="./simply-straight.pug"></template>

<script>
import HeroPages from 'components/hero/hero-pages/hero-pages'

export default {
  computed: {
    props () {
      return this.$store.state.pages['simply-straight']
    }
  },
  components: {
    HeroPages
  }
}
</script>
