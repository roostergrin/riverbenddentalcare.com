<template lang="pug" src="./financial.pug"></template>

<script>
import HeroPages from 'components/hero/hero-pages/hero-pages'

export default {
  computed: {
    props () {
      return this.$store.state.pages.financial
    }
  },
  components: {
    HeroPages
  }
}
</script>
