<template lang="pug" src="./covid-19.pug"></template>

<script>
import CustomCovidSection from 'custom/custom-covid-section/custom-covid-section'
import CustomCovidImages from 'custom/custom-covid-images/custom-covid-images'
import HeroPages from 'components/hero/hero-pages/hero-pages'

export default {
  computed: {
    props () {
      return this.$store.state.pages['covid-19']
    }
  },
  components: {
    CustomCovidSection,
    HeroPages,
    CustomCovidImages
  }
}
</script>
