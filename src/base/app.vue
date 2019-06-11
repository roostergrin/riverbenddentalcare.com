<template lang="pug" src="./app.pug"></template>

<script>
import TheNavigation from 'components/navigation/navigation'

export default {
  async created () {
    this.$store.dispatch('GET_APP')
    // this.$store.dispatch('GET_BLOG')
    this.$store.dispatch('GET_PAGES')
    this.$store.dispatch('GET_INSTAGRAM')
    this.$store.dispatch('SET_SCROLLED', false)
  },
  components: {
    TheNavigation
  }
}
</script>

<style src='../main.sass' lang='sass'></style>
