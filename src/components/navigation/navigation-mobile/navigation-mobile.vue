<template lang="pug" src="./navigation-mobile.pug"></template>

<script>
import CovidBanner from 'custom/custom-covid-banner/custom-covid-banner'

export default {
  data () {
    return {
      menuActive: false
    }
  },
  props: {
    props: {
      Type: Object
    },
    links: {
      Type: Array
    },
    scrolling: {
      Type: Boolean
    }
  },
  computed: {
    contact () {
      return this.$store.state.app.nav
    }
  },
  methods: {
    toggleMenu () {
      this.menuActive = !this.menuActive
      this.menuActive ? document.body.classList.add('body-stop') : document.body.classList.remove('body-stop')
    },
    closeMenu () {
      this.menuActive = false
      document.body.classList.remove('body-stop')
    }
  },
  components: {
    CovidBanner
  }
}
</script>
