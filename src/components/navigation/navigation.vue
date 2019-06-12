<template lang="pug" src="./navigation.pug"></template>

<script>
import Desktop from 'components/navigation/navigation-desktop/navigation-desktop'
// import Mobile  from 'components/navigation/navigation-mobile/navigation-mobile'

export default {
  data () {
    return {
      windowHeight: window.pageYOffset
    }
  },
  computed: {
    props () {
      return this.$store.state.app.nav
    },
    links () {
      return this.$router.options.routes.filter((link) => {
        return link.navigation
      })
    },
    scrolling () {
      return this.windowHeight > (window.innerHeight * 0.35)
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      this.windowHeight = window.pageYOffset
    })
  },
  components: {
    Desktop
    // ,
    // Mobile
  }
}
</script>
