<template lang="pug" src="./app.pug"></template>

<script>
import GoogleTranslate from 'components/google-translate/google-translate'
import TheFooter from 'components/footer/footer'
import TheNavigation from 'components/navigation/navigation'
import BaseBaseAccess from 'components/base-access/index'

export default {
  async created () {
    this.$store.dispatch('GET_APP')
    // this.$store.dispatch('GET_BLOG')
    this.$store.dispatch('GET_PAGES')
    this.$store.dispatch('GET_INSTAGRAM')
    this.$store.dispatch('SET_SCROLLED', false)
  },
  components: {
    GoogleTranslate,
    TheFooter,
    TheNavigation,
    BaseBaseAccess
  }
}
</script>

<style src='../main.sass' lang='sass'></style>
