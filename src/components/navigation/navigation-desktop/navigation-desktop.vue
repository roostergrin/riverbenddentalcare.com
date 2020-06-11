<template lang="pug" src="./navigation-desktop.pug"></template>

<script>
import CovidBanner from 'custom/custom-covid-banner/custom-covid-banner'

export default {
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
  components: {
    CovidBanner
  }
}
</script>
