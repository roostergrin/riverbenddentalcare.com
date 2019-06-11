<template lang="pug" src="./contact.pug"></template>

<script>
import HeroPages from 'components/hero/hero-pages/hero-pages'

export default {
  computed: {
    props () {
      return this.$store.state.pages.contact
    }
  },
  components: {
    HeroPages
  }
}
</script>
