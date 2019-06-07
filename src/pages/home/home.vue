<template lang="pug" src="./home.pug"></template>

<script>
import SliderMain from 'components/slider/slider-main'
export default {
  computed: {
    props () {
      return this.$store.state.pages.home
    }
  },
  components: {
    SliderMain
  }
}
</script>
